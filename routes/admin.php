<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserManagement\StudentManagementController;
use App\Http\Controllers\Admin\UserManagement\TeacherManagementController;

// ✅ All admin routes protected by the check.guard middleware
Route::prefix('admin')
    ->middleware(['check.guard:admin,access-admin','auth:admin'])
    ->group(function () {

        // Dashboard
        Route::get('/dashboard', fn() => inertia('Admin/Dashboard/AdminDashboard'))
            ->name('admin.dashboard');

        // Teacher Management
        Route::get('/teachers-list', [TeacherManagementController::class, 'showTeacherTableData'])
            ->name('teacher.data');

        Route::get('/teacher-create', fn() => inertia('Admin/UserManagement/CreateTeacher'))
            ->name('teacher.form');

        Route::post('/teacher-store', [TeacherManagementController::class, 'storeTeacher'])
            ->name('store.teacher');

        Route::get('/teachers/{teacherId}/edit', [TeacherManagementController::class, 'editTeacherForm'])
            ->name('edit.teacher');

        Route::post('/teacher-update/{teacherId}', [TeacherManagementController::class, 'updateTeacher'])
            ->name('update.teacher');

        Route::delete('/teacher-delete/{teacherId}', [TeacherManagementController::class, 'deleteTeacher'])
            ->name('delete.teacher');

        Route::get('/teacher/{teacherId}/profile', [TeacherManagementController::class, 'profilePage'])
            ->name('profile.teacher');

        // Student Management
        Route::get('/student-list', [StudentManagementController::class, 'studentDataTable'])
            ->name('student.data');

        Route::get('/student/{studentId}/edit',[StudentManagementController::class,'editStudentForm'])
            ->name('edit.studentForm');
    });
