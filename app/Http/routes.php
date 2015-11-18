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
    return \App\Card::first($cardID);
});

Route::get('/api/deck/{deck}', function($deck) {
    return \App\Deck::first($deck);
});

//For assignment 5
//Jeffrey Li
Route::get('/time', function() {
	return \Carbon\Carbon::now();
});


//Eric Liu - Assignment 5
Route::get('/EricLiu', function() {
	$converter = new CommonMarkConverter();
    return $converter->convertToHtml('# Eric Liu was here.');
});

//Eric Cao - Assignment 5
Route::get('/patchinfo', function() {
    $parameters = [
        'locale' => "enUS"
    ];
    return Cards::info($parameters);
});

//Ray Lee - A5
Route::get('/getcard', function() {
	$name = $_GET["name"];
	return Cards::get($name);
});

//Ray Lee - A5
Route::get('/getrandom', function() {
	$faker = Faker\Factory::create();
	echo $faker->name;
	echo nl2br("\n");
	echo $faker->address;
	echo nl2br("\n");
	echo $faker->text;
});
