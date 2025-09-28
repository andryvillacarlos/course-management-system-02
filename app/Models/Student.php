<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Student extends Model
{
    /** @use HasFactory<\Database\Factories\StudentFactory> */
    use HasFactory;

    public $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'student_id',
        'first_name',
        'middle_name',
        'last_name',
        'date_of_birth',
        'gender',
        'nationality',
        'email',
        'phone',
        'address',
        'guardian_name',
        'guardian_contact',
        'course',
        'year_level',
        'status',
        'password'

    ];
   
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
