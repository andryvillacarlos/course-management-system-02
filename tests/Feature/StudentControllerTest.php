<?php

use App\Models\Student;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('students can register and are redirected to dashboard', function () {
    // Arrange: valid student registration data
    $data = [
        'student_id'        => 'S12345',
        'first_name'        => 'John',
        'middle_name'       => null,
        'last_name'         => 'Doe',
        'email'             => 'lala@gmail.com',
        'date_of_birth'     => '2000-01-01',
        'gender'            => 'male',
        'nationality'       => 'Filipino',
        'phone'             => '09123456789',
        'address'           => 'Sample Address',
        'guardian_name'     => 'Parent Doe',
        'guardian_contact'  => '09123456789',
        'course'            => 'BSIT',
        'year_level'        => '1',
        'status'            => 'regular',
        'password'          => 'password123',
        'password_confirmation' => 'password123',
    ];

    // Act: make POST request to registration route
    $response = $this->post(route('student.register'), $data);

    // Optional debugging
    if ($response->exception) {
        dump('❌ Exception:', $response->exception->getMessage());
    }

    if (session('errors')) {
        dump('❌ Validation errors:', session('errors')->toArray());
    }

    // Assert: request passed validation
    $response->assertSessionHasNoErrors();

    // Assert: student record exists in database
    $this->assertDatabaseHas('students', [
        'email'      => 'lala@gmail.com',
        'first_name' => 'John',
        'last_name'  => 'Doe',
    ]);

    // Assert: redirected to dashboard
    $response->assertRedirect(route('dashboard'));

    // Assert: student is authenticated via the "student" guard
    $this->assertAuthenticatedAs(Student::where('email', 'lala@gmail.com')->first(), 'student');
});
