<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
 
  public function login(LoginRequest $request): RedirectResponse
    {
        $email = $request->input('email');

        // Determine which guard to use
        $guard = match(true) {
            Teacher::where('email', $email)->exists() => 'teacher',
            Student::where('email', $email)->exists() => 'student',
            default => 'web',
        };

        try {
            // Authenticate user with the correct guard
            $request->authenticate($guard);
            $request->session()->regenerate();

            // Redirect based on guard
            $dashboardRoute = match($guard) {
                'teacher' => route('teacher.dashboard'),
                'student' => route('student.dashboard'),
                default => route('landing.about'),
            };

            return redirect()->intended($dashboardRoute);

        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::warning('Failed login attempt', [
                'email' => $email,
                'guard' => $guard,
            ]);

            return back()->withErrors([
                'email' => 'Invalid credentials.',
            ])->withInput($request->only('email'));
        }
    }
}
