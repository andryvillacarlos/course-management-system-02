<?php

use App\Models\Student;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('student registration screen can be accessed', function () {
    $response = $this->get(route('register')); // if you have a form page

    $response->assertStatus(200);
});

test('students can register with valid data', function () {
    $data = [
        'first_name'           => 'John',
        'middle_name'          => 'M',
        'last_name'            => 'Doe',
        'email'                => 'john@example.com',
        'date_of_birth'        => '2000-01-01',
        'gender'               => 'male',
        'nationality'          => 'Filipino',
        'phone'                => '09123456789',
        'address'              => 'Sample Address',
        'guardian_name'        => 'Parent Doe',
        'guardian_contact'     => '09123456789',
        'course'               => 'BSIT',
        'year_level'           => '1',
        'status'               => 'regular',
        'password'             => 'password123',
        'password_confirmation'=> 'password123',
    ];

    $response = $this->post(route('student.register'), $data);

    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('dashboard'));

    $this->assertDatabaseHas('students', [
        'email'      => 'john@example.com',
        'first_name' => 'John',
        'last_name'  => 'Doe',
    ]);
});

test('students cannot register with missing required fields', function () {
    $data = [
        'email' => 'invalid-email',
        'password' => 'short',
        'password_confirmation' => 'mismatch',
    ];

    $response = $this->post(route('student.register'), $data);

    $response->assertSessionHasErrors([
        'first_name',
        'last_name',
        'date_of_birth',
        'gender',
        'phone',
        'address',
        'guardian_name',
        'guardian_contact',
        'course',
        'year_level',
        'status',
        'email',
        'password',
    ]);
});

test('students cannot register with duplicate email', function () {
    Student::factory()->create(['email' => 'existing@example.com']);

    $data = [
        'first_name'           => 'Jane',
        'last_name'            => 'Doe',
        'email'                => 'existing@example.com',
        'date_of_birth'        => '2000-01-01',
        'gender'               => 'female',
        'phone'                => '09123456789',
        'address'              => 'Sample Address',
        'guardian_name'        => 'Parent Doe',
        'guardian_contact'     => '09123456789',
        'course'               => 'BSIT',
        'year_level'           => '1',
        'status'               => 'regular',
        'password'             => 'password123',
        'password_confirmation'=> 'password123',
    ];

    $response = $this->post(route('student.register'), $data);

    $response->assertSessionHasErrors(['email']);
});
