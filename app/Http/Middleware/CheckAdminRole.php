<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\UserRole;

class CheckAdminRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(Auth::check()){
            $user = Auth::user();
            $role = UserRole::where('user_id', $user->id)->where('role', UserRole::$ADMIN)->exists();

            if($role){
                Log::debug($user->name . " accessed a protected route");
                return $next($request);
            }
        } else {
            Log::debug("Failed auth check");
        }
        return redirect('/');
    }
}
