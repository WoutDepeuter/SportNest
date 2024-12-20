<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public $fillable = [
        "name",
        "description",
    ];

    /**
     * @param int $amount
     * @return Tag[]
     */
    public static function Random(int $amount): array
    {
        return Tag::where("name", "NOT LIKE", "moeilijkheid_%")
            ->where("name", "NOT LIKE", "uithoudingsvermogen_%")
            ->inRandomOrder()
            ->limit($amount)
            ->get()
            ->all();
    }

    /**
     * @return Tag[]
     */
    public static function difficultyTags(): array
    {
        return Tag::where("name", "LIKE", "moeilijkheid_%")->get()->all();
    }

    /**
     * @return Tag[]
     */
    public static function enduranceTags(): array
    {
        return Tag::where("name", "LIKE", "uithoudingsvermogen_%")->get()->all();
    }

}
