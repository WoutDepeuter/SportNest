<?php

namespace App\Models\Quiz;

use App\Models\Tag;

class QuizQuestion
{

    public string $label;
    public string $description;

    public QuizQuestionType $type;

    public mixed $data;

    private function __construct(string $label, string $description, QuizQuestionType $type, mixed $data)
    {
        $this->label = $label;
        $this->description = $description;
        $this->type = $type;
        $this->data = $data;
    }


    /**
     * @param string $label
     * @param string $description
     * @param Tag[] $data
     * @return QuizQuestion
     */
    public static function multi(string $label, string $description, array $data): QuizQuestion
    {
        return new QuizQuestion($label, $description, QuizQuestionType::MULTI, $data);
    }

    public static function range(string $label, string $description, Tag $tag): QuizQuestion
    {
        return new QuizQuestion($label, $description, QuizQuestionType::RANGE, $tag);
    }

}
