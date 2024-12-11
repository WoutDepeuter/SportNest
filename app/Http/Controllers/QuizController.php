<?php

namespace App\Http\Controllers;

use App\Models\Quiz\Quiz;
use Inertia\Inertia;

class QuizController extends Controller
{

    public function index() {
        return Inertia::render('Quiz/Index', [
            "quiz" => new Quiz()
        ]);
    }

}
