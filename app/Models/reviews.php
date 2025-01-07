<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reviews extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'text',
        'score',
        'sport_club_id',
    ];

    public function sportClub()
    {
        return $this->belongsTo(SportClub::class);
    }
}
