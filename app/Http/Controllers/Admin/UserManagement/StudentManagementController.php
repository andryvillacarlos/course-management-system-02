<?php

namespace App\Http\Controllers\Admin\UserManagement;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentManagementController extends Controller
{
  
 public function studentDataTable(Request $request)
 {
    $this->authorize('viewAny', Student::class);

    $search = trim($request->input('search', ''));
    $filter = trim($request->input('filter', ''));

    $students = Student::query()
        ->when($search, function ($query, $search) {
            $query->where(function ($q) use ($search) {
                $q->where('student_id', 'like', "%{$search}%")
                  ->orWhere('first_name', 'like', "%{$search}%")
                  ->orWhere('last_name', 'like', "%{$search}%")
                  ->orWhereRaw("CONCAT(first_name, ' ', last_name) LIKE ?", ["%{$search}%"])
                  ->orWhere('email', 'like', "%{$search}%");
            });
        })
        ->when($filter && $filter !== 'all', fn($query) =>
            $query->where('department', $filter)
        )
        ->latest('created_at')
        ->paginate(10)
        ->onEachSide(1)
        ->withQueryString();

    return inertia('Admin/UserManagement/StudentTableData', [
        'studentData' => $students->items(), // only the data for the current page
        'filters' => [
            'search' => $search,
            'filter' => $filter,
        ],
        'pagination' => [
            'current_page' => $students->currentPage(),
            'last_page'    => $students->lastPage(),
            'per_page'     => $students->perPage(),
            'total'        => $students->total(),
        ],
    ]);
}

}
