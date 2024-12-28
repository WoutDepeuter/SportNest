<?php

namespace App\Http\Controllers;
use App\Models\SportClub;
use Illuminate\Http\JsonResponse;
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
