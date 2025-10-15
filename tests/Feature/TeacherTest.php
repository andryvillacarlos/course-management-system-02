<?php

use App\Models\Admin;
use App\Models\Teacher;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function () {
    // ✅ Login as a real admin using the correct guard
    $this->actingAs(Admin::factory()->create(), 'admin');
});

test('it can list teachers with pagination', function () {
    Teacher::factory()->count(15)->create();

    $response = $this->get('/admin/teachers-list');

    $response->assertStatus(200)
             ->assertInertia(fn ($page) =>
                 $page->component('Admin/UserManagement/TeacherTableData')
                      ->has('teacherDataList.data', 10)
                      ->has('pagination')
             );
});

test('it can filter teachers by department', function () {
    Teacher::factory()->create(['department' => 'Science']);
    Teacher::factory()->create(['department' => 'Math']);

    $response = $this->get('/admin/teachers-list?filter=Science');

    $response->assertStatus(200)
             ->assertInertia(fn ($page) =>
                 $page->where('filters.filter', 'Science')
                      ->has('teacherDataList.data', 1)
                      ->where('teacherDataList.data.0.department', 'Science')
             );
});

test('it can search teachers by name or email', function () {
    $teacher = Teacher::factory()->create([
        'first_name' => 'John',
        'last_name'  => 'Doe',
        'email'      => 'john@gmail.com',
    ]);

    $response = $this->get('/admin/teachers-list?search=john');

    $response->assertStatus(200)
             ->assertInertia(fn ($page) =>
                 $page->where('filters.search', 'john')
                      ->has('teacherDataList.data', 1)
                      ->where('teacherDataList.data.0.email', $teacher->email)
             );
});

test('admin can add a new teacher account', function () {
    // 🧩 Arrange - valid form input
    $teacherData = [
        'teacher_id'   => 'TCH-1001',
        'first_name'   => 'John',
        'middle_name'  => 'A',
        'last_name'    => 'Doe',
        'date_of_birth'=> '1990-01-01',
        'gender'       => 'male',
        'nationality'  => 'Filipino',
        'email'        => 'john.doe@example.com',
        'phone'        => '09123456789',
        'address'      => 'Cebu City',
        'department'   => 'Computer Science',
        'courses'      => ['CS101', 'CS102'], // ✅ must be an array
        'designation'  => 'Instructor',
        'status'       => 'active',
        'password'     => 'password123',
        'password_confirmation' => 'password123', // ✅ added confirmation
    ];

    // 🧭 Act
    $response = $this->post(route('store.teacher'), $teacherData);

    // ✅ Assert
    $response->assertRedirect(route('teacher.data')); // redirect after success

    $this->assertDatabaseHas('teachers', [
        'email' => 'john.doe@example.com',
        'first_name' => 'John',
        'department' => 'Computer Science',
    ]);

    // 🧠 Optional - ensure password was hashed
    $teacher = Teacher::where('email', 'john.doe@example.com')->first();
    expect($teacher->password)->not->toBe('password123');
});