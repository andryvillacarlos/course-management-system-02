<?php

namespace App\Http\Resources\Admin\UserManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeacherResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'teacher_id'   => $this->teacher_id,
            'first_name'   => $this->first_name,
            'middle_name'  => $this->middle_name,
            'last_name'    => $this->last_name,
            'full_name'    => trim($this->first_name . ' ' . ($this->middle_name ? $this->middle_name . ' ' : '') . $this->last_name),
            'date_of_birth'=> $this->date_of_birth,
            'gender'       => $this->gender,
            'nationality'  => $this->nationality,
            'email'        => $this->email,
            'phone'        => $this->phone,
            'address'      => $this->address,
            'department'   => $this->department,
            'courses'      => $this->courses ?? [],
            'designation'  => $this->designation,
            'status'       => $this->status,
            
        ];
    }
}
