<?php

namespace App\Models\Quiz;

class QuizPage
{

    public string $title;

    public string $info;

    /**
     * @type QuizQuestion[]
     */
    public array $questions;

}
