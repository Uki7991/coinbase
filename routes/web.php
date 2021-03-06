<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/register', 'layouts.app');
Route::view('/login', 'layouts.app');

Route::get('/', function () {
    return view('layouts.app');
});

Route::view('/{any}', 'layouts.app')->where('any', '.*');
