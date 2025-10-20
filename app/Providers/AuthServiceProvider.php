<?php

namespace App\Providers;


use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\Teacher;
use App\Models\Admin;
use App\Models\Student;
use App\Policies\Admin\UserManagementPolicy;
class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any authentication / authorization services.
     */
     
    protected $policies = [
      
     Teacher::class => UserManagementPolicy::class,
     Admin::class   => UserManagementPolicy::class,
     Student::class => UserManagementPolicy::class,
    
    ];

    public function boot(): void
    {
        $this->registerPolicies();

        // Gates for each guard
        Gate::define('access-student', fn($user) => $user instanceof Student);
        Gate::define('access-teacher', fn($user) => $user instanceof Teacher);
        Gate::define('access-web', fn($user) => $user instanceof User);
        Gate::define('access-admin',fn($user) => $user instanceof Admin);
    }
}
