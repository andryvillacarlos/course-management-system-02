<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Teacher;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    protected $model = Teacher::class;

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
            'teacher_id' => $this->faker->unique()->numerify('T####'),
            'first_name' => $firstName,
            'middle_name' => $this->faker->optional()->firstName(),
            'last_name' => $lastName,
            'date_of_birth' => $this->faker->date('Y-m-d', '1995-01-01'),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'nationality' => $this->faker->country(),
            'email' => $this->faker->unique()->userName() . '@gmail.com', // always Gmail
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'department' => $this->faker->randomElement(['IT', 'Math', 'Business', 'Science']),
            'courses' => json_encode([
                $this->faker->randomElement(['CS101', 'CS102', 'MATH101', 'ENG101'])
            ]),
            'designation' => $this->faker->randomElement(['Lecturer', 'Assistant Professor', 'Professor']),
            'status' => $this->faker->randomElement(['active', 'inactive']),
            'password' => bcrypt('password'), // default password
            'remember_token' => Str::random(10),
        ];
    }
}
