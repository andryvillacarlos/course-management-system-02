<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\StudentStoreRequests;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    public function storeStudent(StudentStoreRequests $request) : RedirectResponse
     {
        $validated = $request->validated();
        $student = Student::create($validated);
        Auth::guard('student')->login($student);
        return redirect(route('dashboard',absolute:false));
    }

}
