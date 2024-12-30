<?php

namespace App\Http\Controllers;

use App\Models\Quiz\Quiz;
use App\Models\Quiz\QuizResult;
use App\Models\Sport;
use App\Models\SportClub;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller
{

    public function index() {
        return Inertia::render('Quiz/Index', [
            "quiz" => new Quiz()
        ]);
    }

    public function findWithWeigh(Request $request) {
        $result = $request->get('results');

        if (sizeof($result) == 0) {
            return SportClub::limit(10)->get();
        }

        $topSports = Sport::with('tags')
            ->select('sports.*')
            ->join('sport_tags', 'sports.id', '=', 'sport_tags.sport_id')
            ->join('tags', 'tags.id', '=', 'sport_tags.tag_id')
            ->groupBy('sports.id')
            ->selectRaw(
                'SUM(CASE ' .
                collect($result)->map(function ($id, $weight) {
                    return "WHEN tags.id = '{îd}' THEN {$weight}";
                })->join(' ') .
                ' ELSE 0 END) as dynamic_weight'
            )
            ->orderBy('dynamic_weight', 'DESC')
            ->limit(10)
            ->get();

        $topSportIds = $topSports->pluck('id');

        return SportClub::whereHas('sports', function ($query) use ($topSportIds) {
            $query->whereIn('sports.id', $topSportIds);
        })->where('verified', '=', true)->limit(10)->get();
    }

}
