<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(LoginRequest $request) : RedirectResponse
    {
      $email = $request->input('email');

if (Teacher::where('email', $email)->exists()) {
    $guard = 'teacher';
} elseif (Student::where('email', $email)->exists()) {
    $guard = 'student';
} else {
    $guard = 'web';
}

$request->authenticate($guard);
$request->session()->regenerate();

$dashboardRoute = match($guard) {
    'student' => route('student.dashboard'),
    'teacher' => route('teacher.dashboard'),
    default => route('landing.about'),
};

return redirect()->intended($dashboardRoute);

    }
}
