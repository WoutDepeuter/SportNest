<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SportClub extends Model
{
    /** @use HasFactory<\Database\Factories\SportClubFactory> */
    use HasFactory;

    public string $name;

    /**
     * @return Sport[]
     */
    public function Sports(): BelongsToMany
    {
        return $this->BelongsToMany(Sport::class, 'sport_club_sports');
    }

}
