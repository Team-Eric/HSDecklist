<?php

use League\CommonMark\CommonMarkConverter;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/card/{card}', function($cardID) {
    return \App\Card::find($cardID)->get();
});

Route::get('/api/deck/{deck}', function($deck) {
    return \App\Deck::with("cards")->find($deck);
});

Route::get("/api/deck/class/{class}", function($class) {
	return \App\Deck::where("playerClass", "=", $class)->get();
});