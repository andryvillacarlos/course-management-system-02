import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table as ShadcnTable,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import TeacherTableHeader from "./TeacherTableHeader";

export default function TeacherList() {
  const [search, setSearch] = useState("");

  const teachers = useMemo(
    () => [
      { id: 1, name: "John Doe", email: "john@example.com", subject: "Mathematics" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", subject: "English" },
      { id: 3, name: "Mark Johnson", email: "mark@example.com", subject: "Science" },
      { id: 4, name: "Emily Davis", email: "emily@example.com", subject: "History" },
    ],
    []
  );

  const filteredTeachers = teachers.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: "#",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("subject", {
      header: "Subject",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors pointer-events-auto">
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[120px] rounded-lg shadow-md">
            <DropdownMenuItem className="flex items-center gap-2 text-gray-700 hover:bg-gray-100">
              <Pencil size={16} /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-red-600 hover:bg-red-50">
              <Trash2 size={16} /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    }),
  ];

  const table = useReactTable({
    data: filteredTeachers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6 space-y-4">
     <TeacherTableHeader/>

      {/* Table Card */}
      <Card className="shadow-lg rounded-lg border border-gray-100">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <ShadcnTable className="min-w-full divide-y divide-gray-200">
              <TableHeader className="bg-indigo-50">
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <TableHead
                        key={header.id}
                        className="text-left text-indigo-700 uppercase text-xs font-medium tracking-wider px-4 py-3"
                        >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                    ))}
                    </TableRow>
                ))}
                </TableHeader>

              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors cursor-default"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-4 py-3 text-gray-700 pointer-events-auto"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                {table.getRowModel().rows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="text-center py-6 text-gray-400">
                      No teachers found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </ShadcnTable>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
