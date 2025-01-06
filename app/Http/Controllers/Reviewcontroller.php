<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\reviews;

class Reviewcontroller extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'text' => 'required|string',
            'score' => 'required|integer|min:1|max:5',
            'sport_club_id' => 'required|exists:sport_clubs,id',
        ]);

        $validatedData['name'] = auth()->user()->name;
        reviews::create($validatedData);
    
        return response()->json(['message' => 'Review submitted successfully'], 201);
    }
}