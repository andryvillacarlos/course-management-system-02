<?php

namespace App\Http\Controllers\Admin\UserManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\TeacherStoreRequest;
use App\Http\Resources\Admin\UserManagement\TeacherResources;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\QueryException;
use App\Http\Requests\TeacherUpdateRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TeacherManagementController extends Controller
{

    public function showTeacherTableData(Request $request)
    {
        $this->authorize('viewAny', Teacher::class);

        $search  = trim($request->input('search', ''));
        $filter  = trim($request->input('filter', ''));

        $teachers = Teacher::query()
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('teacher_id', 'like', "%{$search}%")
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

        return inertia('Admin/UserManagement/TeacherTableData', [
            'teacherDataList' => TeacherResources::collection($teachers),
            'filters' => [
                'search' => $search,
                'filter' => $filter,
            ],
            'pagination' => [
                'current_page' => $teachers->currentPage(),
                'last_page'    => $teachers->lastPage(),
                'per_page'     => $teachers->perPage(),
                'total'        => $teachers->total(),
            ],
        ]);
    }

    /**
     * Store a new teacher record.
     */
    public function storeTeacher(TeacherStoreRequest $request)
    {
        $this->authorize('create', Teacher::class);

        try {
            $validated = $request->validated();

            $teacher = Teacher::create($validated);

            return redirect()
                ->route('teacher.data')
                ->with('success', 'Teacher created successfully!');
        } 
        catch (QueryException $e) {
            Log::error('Database error while creating teacher: ' . $e->getMessage());

            return back()
                ->withErrors(['error' => 'Failed to create teacher due to a database issue.'])
                ->withInput();
        } 
        catch (\Exception $e) {
            Log::error('Unexpected error while creating teacher: ' . $e->getMessage());

            return back()
                ->withErrors(['error' => 'An unexpected error occurred while creating the teacher.'])
                ->withInput();
        }
    }


    public function editTeacherForm($teacherId)
    {
      
        $teacher = Teacher::where('teacher_id',$teacherId)->firstOrFail();

        $this->authorize('update',$teacher);

        return inertia('Admin/UserManagement/EditTeacherForm',[
            'teacher' => new TeacherResources($teacher),
        ]);

    }

   public function updateTeacher(TeacherUpdateRequest $request,$teacherId)
   {
        $teacher = Teacher::where('teacher_id', $teacherId)->firstOrFail();

        $this->authorize('update', $teacher);

        try {
            $validated = $request->validated();

            $teacher->update($validated);

            return redirect()
                ->route('teacher.data')
                ->with('success', 'Teacher updated successfully!');
        } 
        catch (QueryException $e) {
            
            Log::error('Database error while updating teacher: ' . $e->getMessage());

            return back()
                ->withErrors(['error' => 'Failed to update teacher due to a database issue.'])
                ->withInput();
        } 
        catch (\Exception $e) {
            
            Log::error('Unexpected error while updating teacher: ' . $e->getMessage());

            return back()
                ->withErrors(['error' => 'An unexpected error occurred while updating the teacher.'])
                ->withInput();
        }
  }

  public function deleteTeacher($teacherId)
  {
    try {
   
        $teacher = Teacher::where('teacher_id',$teacherId);

        $teacher->delete();

        return redirect()
            ->route('teacher.data')
            ->with('success', 'Teacher deleted successfully!');
    } 
    catch (ModelNotFoundException $e) {
        
        return redirect()
            ->back()
            ->withErrors(['error' => 'Teacher not found.']);
    } 
    catch (QueryException $e) {
        
        Log::error('Database error while deleting teacher: ' . $e->getMessage());
        return redirect()
            ->back()
            ->withErrors(['error' => 'Failed to delete teacher due to a database issue.']);
    } 
    catch (\Exception $e) {
        
        Log::error('Unexpected error while deleting teacher: ' . $e->getMessage());
        return redirect()
            ->back()
            ->withErrors(['error' => 'An unexpected error occurred while deleting the teacher.']);
    }
}

}


