import { Card, CardContent } from "@/components/ui/card";
import {
  Table as ShadcnTable,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  MoreHorizontal,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  User2,
} from "lucide-react";
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
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { router } from "@inertiajs/react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import StudentTableHeader from "./StudentTableHeader";

export default function StudentList({ studentData }) {
  const columnHelper = createColumnHelper();

  // ✏️ Edit student
  const handleEdit = (studentId) => {
    router.visit(route("edit.studentForm", studentId), {
      preserveScroll: true,
      preserveState: true,
    });
  };

  // 🗑️ Delete student
  const handleDelete = (studentId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(route("delete.student", studentId), {
          preserveScroll: true,
          onSuccess: () => toast.success("Student deleted successfully."),
          onError: () => toast.error("Failed to delete student."),
        });
      }
    });
  };

  // 📊 Table Columns
  const columns = [
    columnHelper.accessor("student_id", {
      header: "#",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("first_name", {
      header: "Full Name",
      cell: (info) => {
        const student = info.row.original;
        return `${student.first_name} ${
          student.middle_name ? student.middle_name + " " : ""
        }${student.last_name}`;
      },
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("course", {
      header: "Course",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("year_level", {
      header: "Year Level",
      cell: (info) => `Year ${info.getValue()}`,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => (
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            info.getValue() === "regular"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[120px] rounded-lg shadow-md">
            <DropdownMenuItem
              onClick={() => handleEdit(row.original.student_id)}
              className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <Pencil size={16} /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleDelete(row.original.student_id)}
              className="flex items-center gap-2 text-red-600 hover:bg-red-50 cursor-pointer"
            >
              <Trash2 size={16} /> Delete
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.visit(route("student.info", row.original.student_id))}
              className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 cursor-pointer"
            >
              <User2 size={16} /> Info
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    }),
  ];

  const table = useReactTable({
    data: studentData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // 🔹 Pagination
  const handlePagination = (url) => {
    if (!url) return;
    router.visit(url, { preserveState: true, preserveScroll: true });
  };

  return (
    <div className="p-4 sm:p-6 space-y-4">
      <StudentTableHeader/>
      <Card className="shadow-lg rounded-lg border border-gray-100">
        <CardContent className="p-0">
          {/* 🔹 Table */}
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
                      <TableCell key={cell.id} className="px-4 py-3 text-gray-700">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {table.getRowModel().rows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="text-center py-6 text-gray-400">
                      No students found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </ShadcnTable>
          </div>

          {/* 🔹 Pagination Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex justify-center sm:justify-start items-center space-x-2 flex-wrap">
              <button
                onClick={() => handlePagination(studentData.prev_page_url)}
                disabled={!studentData.prev_page_url}
                className="flex items-center px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </button>

              <button
                onClick={() => handlePagination(studentData.next_page_url)}
                disabled={!studentData.next_page_url}
                className="flex items-center px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="text-center sm:text-right text-gray-600 text-sm font-medium">
              Page{" "}
              <span className="font-semibold">{studentData.current_page}</span> of{" "}
              <span className="font-semibold">{studentData.last_page}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
