<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;
class Admin extends Model
{
    /** @use HasFactory<\Database\Factories\AdminFactory> */
    use HasFactory,HasApiTokens,Notifiable;

    public $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected static function booted() {
    
        static::creating(function ($admin) {
            if (empty($admin->id)) {
                $admin->id = (string) Str::uuid();
            }
    });
   }

   public function setPasswordAttribute($value){
     $this->attributes['password'] = bcrypt($value);
   }


}
