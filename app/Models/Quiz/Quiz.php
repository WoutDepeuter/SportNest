<?php

namespace App\Models\Quiz;

use App\Models\Tag;

class Quiz
{

    /**
     * @type QuizPage[]
     */
    public array $pages = [];

    public function __construct()
    {
        $this->pages = self::defaultPages();

        $this->addPage(new QuizPage(
            "moeilijkheid",
            "",
            array(
                QuizQuestion::multi("", "", Tag::difficultyTags())
            )
        ));

        $this->addPage(new QuizPage(
            "uithoudingsvermogen",
            "",
            array(
                QuizQuestion::multi("", "", Tag::enduranceTags())
            )
        ));


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
