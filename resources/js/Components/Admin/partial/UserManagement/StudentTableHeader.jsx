import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, ArrowLeft } from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";

export default function StudentTableHeader() {
  
  const { props } = usePage();
  const currentSearch = props?.filters?.search || "";
  const currentFilter = props?.filters?.filter || "all";

  const [search, setSearch] = useState(currentSearch);
  const [filter, setFilter] = useState(currentFilter);
  const [isSearched, setIsSearched] = useState(!!currentSearch);

  // 🔍 Perform search
  const performSearch = () => {
    if (!search.trim() && filter === "all") return;

    setIsSearched(!!search.trim());

    router.get(
      route("student.data"), // ✅ your Laravel route for student list
      {
        search: search.trim() || null,
        filter: filter !== "all" ? filter : null,
        page: 1, // reset pagination
      },
      {
        preserveState: true,
        preserveScroll: true,
        replace: true,
      }
    );
  };

  // ⌨️ Press Enter to search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch();
    }
  };

  // ⬅️ Clear search
  const clearSearch = () => {
    setSearch("");
    setIsSearched(false);
    router.get(
      route("student.data"),
      { filter: filter !== "all" ? filter : null },
      { preserveState: true, preserveScroll: true, replace: true }
    );
  };

  // 🎓 Handle filter change
  const handleFilterChange = (val) => {
    setFilter(val);
    router.get(
      route("student.data"),
      {
        search: search.trim() || null,
        filter: val !== "all" ? val : null,
        page: 1,
      },
      { preserveState: true, preserveScroll: true, replace: true }
    );
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
      {/* 🔍 Search section */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="relative w-full sm:w-72">
          {isSearched ? (
            <ArrowLeft
              size={18}
              onClick={clearSearch}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700 transition"
            />
          ) : (
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          )}

          <Input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-4"
          />
        </div>

        <Button
          type="button"
          onClick={performSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 flex items-center"
        >
          <Search size={16} className="mr-1" />
          Search
        </Button>
      </div>

      {/* 🎓 Filter + Add Student */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Select value={filter} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="bsit">BSIT</SelectItem>
            <SelectItem value="bscs">BSCS</SelectItem>
            <SelectItem value="bsba">BSBA</SelectItem>
            <SelectItem value="beed">BEED</SelectItem>
          </SelectContent>
        </Select>

        
      </div>
    </div>
  );
}
