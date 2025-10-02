<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


// Root Route
Route::get('/',fn()=>inertia('Landing/LandingPage'));

// <--- Landing Page Route --->

Route::get('/home',fn()=>inertia('Landing/LandingPage')) 
          ->name('landing.home'); // Home page route
// About route
Route::get('/about',fn()=>inertia('Landing/About'))
          ->name('landing.about');
// Course route
Route::get('/course',fn()=>inertia('Landing/CoursePage'))
          ->name('landing.course');
// Contact route
Route::get('/contact',fn()=>inertia('Landing/ContactPage'))
          ->name('landing.contact');
// Student Register
Route::post('/store-student',[StudentController::class,'storeStudent'])
          ->name('student.register');

Route::post('/login-user',[LoginController::class,'login'])
          ->name('user.login');

// <--- Admin Page Route --->
Route::middleware(['auth:student'])->group(function(){
   Route::get('/student/dashboard',fn()=>inertia('Dashboard'))
           ->name('student.dashboard');
 
});

Route::middleware(['auth:teacher'])->group(function(){
    Route::get('/teacher/dashboard',fn()=>inertia('TeacherDashboard'))
           ->name('teacher.dashboard');
});
 

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
