<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class SportClub extends Model
{

    public $fillable = [
        "name",
        "url",
        "verified",
    ];

    /**
     * @return Address
     */
    public function Address(): HasOne
    {
        return $this->hasOne(Address::class);
    }

    /**
     * @return Sport[]
     */
    public function Sports(): BelongsToMany
    {
        return $this->BelongsToMany(Sport::class, 'sport_club_sports');
    }

}
