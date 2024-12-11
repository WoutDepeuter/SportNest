<?php

namespace App\Models\Quiz;

enum QuizQuestionType: int
{
    case MULTI = 0;
    case RANGE = 1;

}
