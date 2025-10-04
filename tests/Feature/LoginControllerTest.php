<?php

use App\Models\Student;
use App\Models\Teacher;
use App\Models\Admin;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('student can log in and is redirected to dashboard', function () {
    $student = Student::factory()->create([
        'email' => 'student@example.com',
        'password' => 'password123', // mutator hashes automatically
    ]);

    $response = $this->post(route('user.login'), [
        'email' => $student->email,
        'password' => 'password123',
    ]);

    $this->assertAuthenticatedAs($student, 'student');
    $response->assertRedirect(route('dashboard'));
});

test('teacher can log in and is redirected to teacher dashboard', function () {
    $teacher = Teacher::factory()->create([
        'email' => 'teacher@example.com',
        'password' => 'password123', // mutator hashes automatically
    ]);

    $response = $this->post(route('user.login'), [
        'email' => $teacher->email,
        'password' => 'password123',
    ]);

    $this->assertAuthenticatedAs($teacher, 'teacher');
    $response->assertRedirect(route('teacher.dashboard'));
});

test('admin can log in and is redirected to admin dashboard', function () {
    $admin = Admin::factory()->create([
        'email' => 'admin@example.com',
        'password' => 'password123', // mutator hashes automatically
    ]);

    $response = $this->post(route('user.login'), [
        'email' => $admin->email,
        'password' => 'password123',
    ]);

    $this->assertAuthenticatedAs($admin, 'admin');
    $response->assertRedirect(route('admin.dashboard'));
});

test('login fails with invalid credentials', function () {
    $response = $this->post(route('user.login'), [
        'email' => 'nonexistent@example.com',
        'password' => 'wrongpassword',
    ]);

    $response->assertSessionHasErrors('email');
    $this->assertGuest();
});
