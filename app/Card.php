<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class Card extends Model {
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'cards';

    protected $primaryKey = "cardId";

    protected static $unguarded = true;

    protected $casts = [
        "mechanics" => 'array',
        "cost" => "integer",
        "attack" => "integer",
        "health" => "integer",
        "durability" => "integer",
        "collectible" => "boolean",
        "elite" => "boolean",
    ];

}
