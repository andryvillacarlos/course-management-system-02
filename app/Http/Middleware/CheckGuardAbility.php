<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class CheckGuardAbility
{
    
 public function handle(Request $request, Closure $next, string $guard, string $ability)
 {
        $user = Auth::guard($guard)->user();

        if (!$user) {
            abort(403, 'Unauthorized access');
        }

        $check = match($ability) {
            'access-student' => $user instanceof \App\Models\Student,
            'access-teacher' => $user instanceof \App\Models\Teacher,
            'access-web' => $user instanceof \App\Models\User,
            'access-admin' => $user instanceof \App\Models\Admin,
            default => false,
        };

        if (! $check) {
            abort(403, 'Unauthorized access');
        }

        return $next($request);

}
}
