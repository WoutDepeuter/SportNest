<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    public string $address;

    public int $nr;

    public int $postcode;

    public string $location;

    public string $coords;
}
