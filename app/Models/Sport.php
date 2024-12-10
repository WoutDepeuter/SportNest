<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sport extends Model
{
    /** @use HasFactory<\Database\Factories\SportFactory> */
    use HasFactory;

    public string $name;

    public string $description;

    /**
     * @return Tag[]
     */
    public function tags(): HasMany
    {
        return $this->HasMany(Tag::class);
    }

}
