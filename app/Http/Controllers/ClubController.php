<?php

namespace App\Http\Controllers;

use App\Models\SportClub; // Zorg ervoor dat het model correct is geïmporteerd
use Illuminate\Http\Request;
use Inertia\Inertia;


class ClubController extends Controller
{
    public function ClubPage($id)
    {
        $club = SportClub::with('address')->findOrFail($id);

        // Stuur de data naar je React-component via Inertia
        return Inertia::render('ClubPage', [
            'club' => $club,
        ]);
    }
}
