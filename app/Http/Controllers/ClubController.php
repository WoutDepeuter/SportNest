<?php

namespace App\Http\Controllers;

use App\Models\SportClub; // Zorg ervoor dat het model correct is geïmporteerd
use Illuminate\Http\Request;
use Inertia\Inertia;


class ClubController extends Controller
{
    public function ClubPage($id)
    {
        $club = SportClub::findOrFail($id);

        // Stuur de data naar je React-component via Inertia
        return Inertia::render('ClubPage', [
            'club' => [
                'name' => $club->name,
                'description' => 'De ' . $club->name . ' is een geweldige sportclub!', // Voeg een beschrijving toe
                'website' => $club->website_url,
                'email' => 'info@' . str_replace('www.', '', parse_url($club->website_url, PHP_URL_HOST)),
                'phone' => '123-456-7890', // Statische telefoon voor nu
                'map_coords' => [
                    'lat' => 50.8503, // Testwaarden (Brussel)
                    'lng' => 4.3517,
                ],
            ],
        ]);
    }
}
