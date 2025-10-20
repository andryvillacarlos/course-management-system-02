<?php

namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;
class Teacher extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\TeacherFactory> */
    use HasFactory,HasApiTokens,Notifiable;
    public $keyType = 'string';
    public $incrementing = false;

    protected $casts = [
        'courses' => 'array'
    ];

    protected $fillable = [
    'teacher_id',
    'first_name',
    'middle_name',
    'last_name',
    'date_of_birth',
    'gender',
    'nationality',
    'email',
    'phone',
    'address',
    'department',
    'courses',
    'designation',
    'status',
    'password',
    'profile_image',
   ];

   protected $hidden = [
    'password',
    'remember_token',
   ];

   protected static function booted() {
    
    static::creating(function ($teacher) {
            if (empty($teacher->id)) {
                $teacher->id = (string) Str::uuid();
            }

            if (empty($teacher->teacher_id)) {
                $year = now()->year;
                $random = strtoupper(substr(Str::uuid(), 0, 6)); // e.g. A1B2C3
                $teacher->teacher_id = $year . '-' . $random;
            }
        });
   }

 public function setPasswordAttribute($value) {
     $this->attributes['password'] = bcrypt($value);
 }



}
