<?php
use Illuminate\Support\Facades\Route;

Route::prefix('student')
    ->middleware([
        'auth:student',
        \App\Http\Middleware\CheckGuardAbility::class . ':student,access-student'
    ])
    ->group(function () {
        Route::get('/dashboard', fn() => inertia('Student/Home/StudentHomePage'))->name('dashboard');
    });