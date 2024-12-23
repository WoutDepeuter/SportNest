<?php

namespace App\Http\Controllers;
use App\Models\SportClub;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            "clubs" => SportClub::all(),
        ]);
    }

    public function verify(int $id)
    {
        $club = SportClub::find($id);
        if ($club) {
            $club->update(['verified' => true]);
            return redirect()->route('admin.dashboard')->with('status', 'Sport club verified successfully.');
        } else {
            return redirect()->route('admin.dashboard')->with('error', 'Sport club not found.');
        }
    }
}
