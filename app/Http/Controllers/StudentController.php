<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentStoreRequests;
use App\Models\Student;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class StudentController extends Controller
{
    public function storeStudent(StudentStoreRequests $request): RedirectResponse
    {
        $validated = $request->validated();

        // Debugging step
        Log::info('Validated student data:', $validated);

        // ✅ Ensure the record is created
        $student = Student::create($validated);

        Log::info('Student created:', ['id' => $student->id ?? null]);

        // ✅ Log in
        Auth::guard('student')->login($student);

        // ✅ Redirect to dashboard
        return redirect()->route('dashboard');
    }
}
