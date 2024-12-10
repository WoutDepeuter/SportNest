<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ClubOwnerController extends Controller
{
    public function Home()
    {
        return Inertia::render('ClubOwner/ClubOwnerPage');
    }

    public function ClubAdd()
    {
        return Inertia::render('ClubOwner/AddClubPage');
    }

    public function ClubEdit()
    {
        return Inertia::render('ClubOwner/EditClubPage');
    }
}
