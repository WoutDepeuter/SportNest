<?php

namespace App\Models\Quiz;

use App\Models\Tag;
use Nette\Utils\Random;

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

        $tags = Tag::Random(4);
        $questions = array();

        foreach ($tags as $tag) {
            $questions[] = QuizQuestion::range("", "", $tag);
        }

        $this->addPage(new QuizPage("Hoe belangrijk is:", "", $questions));
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
