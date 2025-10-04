<?php
use Illuminate\Support\Facades\Route;

Route::prefix('teacher')
    ->middleware([
        'auth:teacher',
        \App\Http\Middleware\CheckGuardAbility::class . ':teacher,access-teacher'
    ])
    ->group(function () {
        Route::get('/dashboard', fn() => inertia('TeacherDashboard'))->name('teacher.dashboard');
    });