import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

export default function TeacherTableHeader({ search, setSearch }) {
  const [filter, setFilter] = useState("all");

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
      {/* Left: Search */}
      <Input
        type="text"
        placeholder="Search teacher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-64"
      />

      {/* Right: Select + Add Teacher */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="math">Mathematics</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="history">History</SelectItem>
          </SelectContent>
        </Select>

        <Button className="flex items-center gap-2" variant="blue">
          <Plus size={16} /> Add Teacher
        </Button>
      </div>
    </div>
  );
}
