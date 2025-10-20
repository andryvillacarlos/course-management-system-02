<?php

namespace App\Policies\Admin;

use App\Models\Admin;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class UserManagementPolicy
{
    use HandlesAuthorization;
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny($user): bool
    {   

          if($user instanceof Admin) return true;

          return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view($user,$model): bool
    {
        if($user instanceof Admin) return true;

        if($user instanceof Teacher && $model instanceof Student) return true;

        if($user instanceof Student && $user->is($model)) return true;

        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(Student $student): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update($user,$model): bool
    {   
        if($user instanceof Admin) return true;
        
        if($user instanceof Teacher && $model instanceof Student) return true;

        if($user instanceof Student && $user->is($model)) return true;

        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(Student $student, Admin $admin): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(Student $student, Admin $admin): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(Student $student, Admin $admin): bool
    {
        return false;
    }
}
