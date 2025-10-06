<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Middleware\RedirectIfAuthenticatedSession;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Root Route
Route::get('/',fn()=>inertia('Landing/LandingPage'))
    ->middleware([RedirectIfAuthenticatedSession::class]);


// --------------- Landing page routes ---------------

Route::get('/home',fn()=>inertia('Landing/LandingPage'))->name('landing.home');

Route::get('/about',fn()=>inertia('Landing/About'))->name('landing.about');

Route::get('/course',fn()=>inertia('Landing/CoursePage'))->name('landing.course');

Route::get('/contact',fn()=>inertia('Landing/ContactPage')) ->name('landing.contact');


// --------------- Profile Page Routes ---------------

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/debug-session', function () {
    return session()->all();
});

Route::get('/check-auth', function () {
    return [
        'student_check' => Auth::guard('student')->check(),
        'student_user' => Auth::guard('student')->user(),
        'session' => session()->all(),
    ];
});



require __DIR__.'/auth.php';
require __DIR__.'/student.php';
require __DIR__.'/admin.php';
require __DIR__.'/teacher.php';
