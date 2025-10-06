<?php
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckGuardAbility;


Route::prefix('admin')
      ->middleware([
        'auth:admin', 
        CheckGuardAbility::class . ':admin,access-admin',
        ])
      ->group(function () {

        Route::get('/dashboard',fn() => inertia('Admin/Dashboard/AdminDashboard'))->name('admin.dashboard');
        Route::get('/teachers-list',fn() => inertia('Admin/UserManagement/TeacherList'))->name('admin.teacher-list');
        
      });
