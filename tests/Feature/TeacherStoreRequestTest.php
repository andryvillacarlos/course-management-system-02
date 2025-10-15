<?php

use App\Models\Admin;
use App\Models\Teacher;
use Illuminate\Foundation\Testing\RefreshDatabase;

use function Pest\Laravel\post;

uses(RefreshDatabase::class);

beforeEach(function () {
    // ✅ Login as a real admin using the correct guard
    $this->actingAs(Admin::factory()->create(), 'admin');
});


test('teacher cannot register with missing required fields', function () {
    
    $data = [
        'email' => 'invalid-email',
        'password' => 'short',
        'password_confirmation' => 'mismatch', 
    ];


    $response = $this->post(route('store.teacher'),$data);

    $response->assertSessionHasErrors([
        'first_name',
        'last_name',
        'gender',
        'department',
    ]);
});

test('teachers cannot register with duplicate email', function () {
    // 🧩 Arrange: create an existing teacher with an email
    Teacher::factory()->create([
        'email' => 'existing@gmail.com',
    ]);

    // 🧩 Act: try to register another teacher with the same email
    $response = post(route('store.teacher'), [
        'teacher_id' => 'T1001',
        'first_name' => 'Jane',
        'middle_name' => 'A.',
        'last_name' => 'Doe',
        'date_of_birth' => '1995-08-15',
        'gender' => 'female',
        'nationality' => 'Filipino',
        'email' => 'existing@gmail.com', // duplicate
        'phone' => '09123456789',
        'address' => 'Sample Address',
        'department' => 'IT',
        'courses' => ['CS101', 'CS102'],
        'designation' => 'Instructor',
        'status' => 'active',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    // 🧾 Assert: should redirect back (validation error)
    $response->assertSessionHasErrors(['email']);

    // 💡 Optional: assert that only one teacher with that email exists
    $this->assertDatabaseCount('teachers', 1);
});
