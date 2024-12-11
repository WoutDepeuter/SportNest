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

}
