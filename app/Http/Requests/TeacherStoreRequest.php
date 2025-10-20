<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UniqueEmailsAcrossTable;

class TeacherStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
     public function rules(): array
    {
        return [
            'teacher_id'    => 'nullable|string|unique:teachers,teacher_id|max:50',
            'first_name'    => 'required|string|max:100',
            'middle_name'   => 'nullable|string|max:100',
            'last_name'     => 'required|string|max:100',
            'date_of_birth' => 'nullable|date|before:today', // made nullable to allow flexibility
            'gender'        => 'required|string|in:male,female',
            'nationality'   => 'nullable|string|max:100',
            'email'         => [
                'required',
                'email',
                'unique:teachers,email',
                'max:150',
                new UniqueEmailsAcrossTable,  
            ],
            'phone'         => 'nullable|string|regex:/^09[0-9]{9}$/',
            'address'       => 'nullable|string|max:255',
            'department'    => 'required|string|max:150',
            'courses'       => 'nullable|array',          // expects JSON/array input
            'courses.*'     => 'string|max:100',          // each course item validation
            'designation'   => 'nullable|string|max:150',
            'status'        => 'in:active,inactive',      // ensure valid status
            'password'      => 'required|string|min:8|confirmed', // must include password_confirmation field
            'profile_image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ];
    }

    /**
     * Custom messages for validation errors (optional).
     */
    public function messages(): array
    {
        return [
            'email.unique'        => 'This email is already registered.',
            'teacher_id.unique'   => 'Teacher ID already exists.',
            'phone.regex'         => 'Phone number must start with 09 and contain 11 digits.',
            'password.confirmed'  => 'Password confirmation does not match.',
        ];
    }
}
