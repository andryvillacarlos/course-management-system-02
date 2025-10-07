<?php

namespace App\Http\Controllers\Admin\UserManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\UserManagement\TeacherResources;
use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherManagementController extends Controller
{

   public function showTeacherTableData(Request $request)
   {
        $search = trim($request->get('search', ''));
        $filter = trim($request->get('filter', ''));

        $teachers = Teacher::query()
            // 🔍 Search only on indexed columns
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('teacher_id', 'like', "%{$search}%")
                      ->orWhere('first_name', 'like', "%{$search}%")
                      ->orWhere('last_name', 'like', "%{$search}%")
                      ->orWhereRaw("CONCAT(first_name, ' ', last_name) LIKE ?", ["%{$search}%"])
                      ->orWhere('email', 'like', "%{$search}%");
                });
            })

            // 🎓 Filter by department (also indexed)
            ->when($filter && $filter !== 'all', fn($query) =>
                $query->where('department', $filter)
            )

            ->latest('created_at')
            ->paginate(10)
            ->onEachSide(1)
            ->withQueryString();

        return inertia('Admin/UserManagement/TeacherTableData', [
            'teacherDataList' => TeacherResources::collection($teachers),
            'filters' => compact('search', 'filter'),
            'pagination' => [
                'current_page' => $teachers->currentPage(),
                'last_page'    => $teachers->lastPage(),
                'per_page'     => $teachers->perPage(),
                'total'        => $teachers->total(),
            ],
        ]);
    }
}


