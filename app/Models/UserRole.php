<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserRole extends Model
{
    use HasFactory;

    public static $USER = 'user';
    public static $ADMIN = 'admin';

    protected $table = 'user_role';

    protected $fillable = [
        'user_id',
        'role',
    ];

    public $timestamps = true;
}
