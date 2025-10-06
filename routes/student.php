<?php
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckGuardAbility;
Route::prefix('student')
    ->middleware([
        'auth:student',
        CheckGuardAbility::class . ':student,access-student',
        
    ])
    ->group(function () {
        Route::get('/dashboard', fn() => inertia('Student/Home/StudentHomePage'))->name('dashboard');
    });