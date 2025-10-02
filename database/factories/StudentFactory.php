<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    protected $model = Student::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $firstName = $this->faker->firstName();
        $lastName = $this->faker->lastName();
        
        return [
            'id' => $this->faker->uuid(),
            'student_id' => $this->faker->unique()->numerify('S####'),
            'first_name' => $firstName,
            'middle_name' => $this->faker->optional()->firstName(),
            'last_name' => $lastName,
            'date_of_birth' => $this->faker->date('Y-m-d', '2006-01-01'),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'nationality' => $this->faker->country(),
            'email' => $this->faker->unique()->userName() . '@gmail.com', // Gmail only
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'guardian_name' => $this->faker->name(),
            'guardian_contact' => $this->faker->phoneNumber(),
            'course' => $this->faker->randomElement(['BSCS', 'BSIT', 'BSA', 'BSBA']),
            'year_level' => $this->faker->randomElement(['1', '2', '3', '4']),
            'status' => $this->faker->randomElement(['regular', 'irregular']),
            'password' => bcrypt('password'), // default password
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
