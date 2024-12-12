<?php

namespace App\Models\Quiz;

use App\Models\Tag;

class QuizResult
{

    public string $loc;

    public int $radius;

    /**
     * @type array<Tag, int>
     */
    public array $results;

}
