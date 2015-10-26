<?php

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

//For assignment 5
//Jeffrey Li
Route::get('/time', function() {
	return \Carbon\Carbon::now();
});

// Eric Cao - Assignment 5
Rout::get('/allCards', function() {
    return Cards::all();
});