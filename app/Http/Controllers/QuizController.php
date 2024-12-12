<?php

namespace App\Http\Controllers;

use App\Models\Quiz\Quiz;
use App\Models\Quiz\QuizResult;
use Inertia\Inertia;

class QuizController extends Controller
{

    public function index() {
        return Inertia::render('Quiz/Index', [
            "quiz" => new Quiz()
        ]);
    }

    public function findWithWeigh(QuizResult $quizResult) {
        // TODO: Get all sports, WITH their tags
        // filter distance
        // sort via the weight passed
        // return
    }

}
