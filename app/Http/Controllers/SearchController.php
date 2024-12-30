<?php

namespace App\Http\Controllers;

use App\Models\Filter\FilterRequest;
use App\Models\Sport;
use App\Models\SportClub;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{

    public function filter(Request $request) {
        // TODO: location

        $sportsIds = $request->input('sports');
        $tagIds = $request->input('tags');
        $name = $request->input('name');

        $clubs = DB::table('sport_clubs')
            ->where('verified', '=', true)
            ->where('name', 'like', '%' . $name . '%')
            ->when(!empty($sportsIds) || !empty($tagIds), function ($query) use ($sportsIds, $tagIds) {
                $query->whereExists(function ($subQuery) use ($sportsIds, $tagIds) {
                    $subQuery->select(DB::raw(1))
                        ->from('sport_club_sports')
                        ->join('sports', 'sports.id', '=', 'sport_club_sports.sport_id')
                        ->join('sport_tags', 'sport_tags.sport_id', '=', 'sports.id')
                        ->whereColumn('sport_club_sports.sport_club_id', 'sport_clubs.id');

                    if (!empty($sportsIds)) {
                        $subQuery->whereIn('sports.id', $sportsIds);
                    }

                    if (!empty($tagIds)) {
                        $subQuery->whereIn('sport_tags.tag_id', $tagIds);
                    }
                });
            })
            ->get();


        return response()->json($clubs);
    }

    public function filterItems()
    {
        return response()->json([
            "sports" => Sport::all(),
            "tags" => Tag::all()
        ]);
    }

}
