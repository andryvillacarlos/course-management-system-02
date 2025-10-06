<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticatedSession
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $redirects = [
            'student' => 'dashboard',
            'teacher' => 'teacher.dashboard',
            'admin' => 'admin.dashboard',
        ];


        foreach($redirects as $guard => $routes){
            if(Auth::guard($guard)->check()){
                return redirect()->route($routes);
            }
        }

        return $next($request);
    }
}
