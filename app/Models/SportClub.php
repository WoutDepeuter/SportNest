<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class SportClub extends Model
{

    public $fillable = [
        "name",
        "url",
        "verified",
    ];

    public static function get(int $id): SportClub
    {
        return SportClub::with('address')->findOrFail($id);
    }

    /**
     * @return Address
     */
    public function Address(): BelongsTo
    {
        return $this->belongsTo(Address::class);
    }

    /**
     * @return Sport[]
     */
    public function Sports(): BelongsToMany
    {
        return $this->BelongsToMany(Sport::class, 'sport_club_sports');
    }

}
