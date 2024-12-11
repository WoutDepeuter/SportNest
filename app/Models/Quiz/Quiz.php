<?php

namespace App\Models\Quiz;

class Quiz
{

    /**
     * @type QuizPage[]
     */
    public array $pages = [];

    public function __construct()
    {
        $this->pages = self::defaultPages();
    }

    public function addPage(QuizPage $page): void
    {
        $this->pages[] = $page;
    }

    /**
     * @return QuizPage[]
     */
    public function defaultPages(): array
    {
        return array();
    }


}
