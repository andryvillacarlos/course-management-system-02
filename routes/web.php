<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


// Root Route
Route::get('/',fn()=>inertia('Landing/LandingPage'));


// --------------- Landing page routes ---------------

Route::get('/home',fn()=>inertia('Landing/LandingPage'))->name('landing.home');

Route::get('/about',fn()=>inertia('Landing/About'))->name('landing.about');

Route::get('/course',fn()=>inertia('Landing/CoursePage'))->name('landing.course');

Route::get('/contact',fn()=>inertia('Landing/ContactPage')) ->name('landing.contact');

// --------------- Authentication Routes ---------------

Route::post('/store-student',[StudentController::class,'storeStudent'])->name('student.register');

Route::post('/login-user',[LoginController::class,'login'])
          ->name('user.login');

// --------------- Student Page Routes ---------------

Route::prefix('student')
    ->middleware([
        'auth:student',
        \App\Http\Middleware\CheckGuardAbility::class . ':student,access-student'
    ])
    ->group(function () {
        Route::get('/dashboard', fn() => inertia('Dashboard'))->name('dashboard');
    });

Route::prefix('teacher')
    ->middleware([
        'auth:teacher',
        \App\Http\Middleware\CheckGuardAbility::class . ':teacher,access-teacher'
    ])
    ->group(function () {
        Route::get('/dashboard', fn() => inertia('TeacherDashboard'))->name('teacher.dashboard');
    });

 
// --------------- Profile Page Routes ---------------

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
