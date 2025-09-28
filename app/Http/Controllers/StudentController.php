<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentStoreRequests;
use App\Models\Student;


class StudentController extends Controller
{
    public function storeStudent(StudentStoreRequests $request){
        
        $validated = $request->validated();
        Student::create($validated);
        return redirect()->route('register')->with('success','Register student successfully');
    }
}
