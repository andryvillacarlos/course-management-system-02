<?php

namespace App\Http\Requests;

use App\Rules\UniqueEmailsAcrossTable;
use Illuminate\Foundation\Http\FormRequest;

class StudentStoreRequests extends FormRequest
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
   public function rules(): array {
    
    return [
        // Core student info
        'student_id' => 'nullable|string|unique:students,student_id|max:50',
        'first_name'      => 'required|string|max:100',
        'middle_name'     => 'nullable|string|max:100',
        'last_name'       => 'required|string|max:100',

        // Personal info
        'date_of_birth'   => 'required|date|before:today',
        'gender'          => 'required|string|in:male,female',
        'nationality'     => 'nullable|string|max:100',

        // Contact info
        'email'           => [
            'required',
            'email',
            'unique:students,email',
            'max:150',
            new UniqueEmailsAcrossTable,
        ],
      
        'phone'           => 'required|string|max:20',
        'address'         => 'required|string|max:255',

        // Guardian info
        'guardian_name'   => 'required|string|max:150',
        'guardian_contact'=> 'required|string|max:20',

        // Academic info
        'course'          => 'required|string|max:150',
        'year_level'      => 'required|string|max:10',
        'status'          => 'required|string|in:regular,irregular,transferee',

        // Authentication
        'password'        => 'required|string|min:8|confirmed',
    ];
}

  
    public function messages(): array
    {
        return [
            'student_id.required' => 'Student ID is required.',
            'student_id.unique'   => 'This Student ID is already registered.',
            'email.unique'        => 'This email is already registered.',
            'password.confirmed'  => 'Password confirmation does not match.',
            'date_of_birth.before'=> 'Date of Birth must be a past date.',
        ];
    }

}
