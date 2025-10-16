<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TeacherUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name'    => ['required', 'string', 'max:100'],
            'middle_name'   => ['nullable', 'string', 'max:100'],
            'last_name'     => ['required', 'string', 'max:100'],
            'email'         => [
                'required',
                'email',
                'max:255',
                Rule::unique('teachers', 'email')->ignore($this->teacher->id),
            ],
            'gender'        => ['required', 'in:male,female,other'],
            'date_of_birth' => ['nullable', 'date', 'before:today'],
            'nationality'   => ['nullable', 'string', 'max:100'],
            'department'    => ['nullable', 'string', 'max:100'],
            'contact_number'=> ['nullable', 'string', 'regex:/^[0-9+\-\s()]+$/', 'max:20'],
            'address'       => ['nullable', 'string', 'max:255'],
        ];
    }

    public function messages(): array
    {
        return [
            // ✅ Email
            'email.required' => 'Please provide an email address.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email address is already used by another teacher.',

            // ✅ Name fields
            'first_name.required' => 'First name is required.',
            'last_name.required' => 'Last name is required.',

            // ✅ Gender
            'gender.required' => 'Please select the teacher’s gender.',
            'gender.in' => 'Invalid gender option selected.',

            // ✅ Date of birth
            'date_of_birth.before' => 'Date of birth must be in the past.',

            // ✅ Contact
            'contact_number.regex' => 'The contact number format is invalid.',
        ];
    }
}
