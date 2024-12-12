<?php

namespace App\Models\Quiz;

class QuizResult
{

    public string $loc;

    public int $radius;

    /**
     * @type QuizTagResult[]
     */
    public array $results;

}
