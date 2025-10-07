<?php
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckGuardAbility;

Route::prefix('teacher')
    ->middleware([
        'auth:teacher',
        CheckGuardAbility::class . ':teacher,access-teacher'
    ])
    ->group(function () {

        Route::get('/dashboard', fn() => inertia('Teacher/Home/TeacherHomePage'))->name('teacher.dashboard');
      
    });