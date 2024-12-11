<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sport extends Model
{
    public $fillable = [
        "name",
        "description",
    ];

    /**
     * @return Tag[]
     */
    public function tags(): HasMany
    {
        return $this->HasMany(Tag::class);
    }

}
