<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Deck extends Model {
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'decks';

    protected static $unguarded = true;

    protected $casts = [
        "id" => "integer",
    ];

    public function cards()
    {
        return $this->belongsToMany('App\Card')->withPivot('count');
    }

}
