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

    /**
     * @param string $title
     * @param string $info
     * @param QuizQuestion[] $questions
     */
    public function __construct(string $title, string $info, array $questions)
    {
        $this->title = $title;
        $this->info = $info;
        $this->questions = $questions;
    }


}
