<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;

class Student extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\StudentFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    public $keyType = 'string';
    public $incrementing = false;

   
    protected $fillable = [
        'student_id',
        'first_name',
        'middle_name',
        'last_name',
        'email',
        'date_of_birth',
        'gender',
        'nationality',
        'phone',
        'address',
        'guardian_name',
        'guardian_contact',
        'course',
        'year_level',
        'status',
        'password',
    ];


    protected $hidden = [
        'password',
        'remember_token',
    ]
   ;
   protected static function booted() {
    
        static::creating(function ($student) {
            if (empty($student->id)) {
                $student->id = (string) Str::uuid();
            }

            if (empty($student->student_id)) {
                $year = now()->year;
                $random = strtoupper(substr(Str::uuid(), 0, 6)); // e.g. A1B2C3
                $student->student_id = $year . '-' . $random;
            }
        });
   }

  public function setPasswordAttribute($value) {
     $this->attributes['password'] = bcrypt($value);
  }


}
