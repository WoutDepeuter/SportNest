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

    public string $name;

    public string $description;

    /**
     * @param int $amount
     * @return Tag[]
     */
    public static function Random(int $amount): array
    {
        return Tag::all()
            ->where('name', 'NOT LIKE', 'moeilijkheid_*')
            ->where('name', 'NOT LIKE', 'uithoudingsvermogen_*')
            ->random($amount)->all();
    }

    /**
     * @return Tag[]
     */
    public static function difficultyTags(): array
    {
        return Tag::all()->where("name", "LIKE", "moeilijkheid_%")->all();
    }

    /**
     * @return Tag[]
     */
    public static function enduranceTags(): array
    {
        return Tag::all()->where("name", "LIKE", "uithoudingsvermogen_%")->all();
    }

}
