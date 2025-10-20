<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class CheckGuardAbility
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @param  string|null  $ability
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next, ?string $guard = null, ?string $ability = null): Response
    {
        // ✅ Default values
        $guard = $guard ?: 'web';
        $ability = $ability ?: 'access-web';

        // ✅ Explicitly tell Laravel which guard to use
        Auth::shouldUse($guard);

        // ✅ Get the authenticated user under that guard
        $user = Auth::guard($guard)->user();

        if (!$user) {
            Log::warning("🚫 Unauthorized: No authenticated user under guard [$guard]", [
                'guard' => $guard,
                'path' => $request->path(),
                'ip' => $request->ip(),
            ]);
            abort(403, "Unauthorized access (no user for guard [$guard]).");
        }

        // ✅ Match ability to model type
        $allowed = match ($ability) {
            'access-admin'   => $user instanceof \App\Models\Admin,
            'access-teacher' => $user instanceof \App\Models\Teacher,
            'access-student' => $user instanceof \App\Models\Student,
            'access-web'     => $user instanceof \App\Models\User,
            default          => false,
        };

        if (!$allowed) {
            Log::warning("🚫 Unauthorized: Wrong user type for ability [$ability]", [
                'expected_ability' => $ability,
                'actual_class' => get_class($user),
                'guard' => $guard,
            ]);
            abort(403, "Unauthorized access (invalid user type for ability [$ability]).");
        }

        Log::info("✅ CheckGuardAbility passed", [
            'guard' => $guard,
            'ability' => $ability,
            'user_id' => $user->id ?? null,
            'user_class' => get_class($user),
        ]);

        return $next($request);
    }
}
