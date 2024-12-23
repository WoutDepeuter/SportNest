<?php

namespace App\Http\Controllers;
use App\Models\SportClub;
use Inertia\Inertia;
use Inertia\Response;

class ClubOwnerController extends Controller
{
    public function Home(): Response
    {
        return Inertia::render('ClubOwner/ClubOwnerPage', [
            "clubs" => SportClub::where("user_id", "=", auth()->user()->id)->get(),
            "name" => auth()->user()->name,
        ]);
    }

    public function ClubAdd(): Response
    {
        return Inertia::render('ClubOwner/AddClubPage');
    }

    public function ClubEdit(): Response
    {
        return Inertia::render('ClubOwner/EditClubPage');
    }
}
