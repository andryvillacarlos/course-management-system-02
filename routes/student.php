<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;


// --------------- Student Routes  ---------------

Route::prefix('student')
    ->middleware([
        'auth:student',
        \App\Http\Middleware\CheckGuardAbility::class . ':student,access-student'
    ])
    ->group(function () {
        Route::get('/dashboard', fn() => inertia('Dashboard'))->name('dashboard');
    });