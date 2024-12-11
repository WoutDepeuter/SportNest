<?php

namespace App\Models\Quiz;

class QuizQuestion
{

    public string $label;
    public string $description;

    public QuizQuestionType $type;

    public mixed $data;

}
