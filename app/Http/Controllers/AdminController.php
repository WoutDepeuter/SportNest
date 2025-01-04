<?php

namespace App\Http\Controllers;
use App\Models\SportClub;
use App\Models\UserRole;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            "clubs" => SportClub::all(),
        ]);
    }

    public function isAdmin(): JsonResponse
    {
        $user = Auth::user();
        $role = UserRole::where('user_id', $user->id)->where('role', UserRole::$ADMIN)->exists();
        if ($role) {
            return response()->json([
                "isAdmin" => true
            ]);
        }
        return response()->json([
            "isAdmin" => false
        ]);
    }

    public function verify(int $id): JsonResponse
    {
        $club = SportClub::find($id);
        if ($club) {
            $club->update(['verified' => true]);
            return response()->json();
        }

        return response()->json([], 404);
    }
}
