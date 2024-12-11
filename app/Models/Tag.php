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
        return Tag::all()->random($amount)->all();
    }

}
