<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', \App\Http\Controllers\API\Auth\RegisterController::class);
Route::post('/login', \App\Http\Controllers\API\Auth\LoginController::class);
Route::post('/logout', \App\Http\Controllers\API\Auth\LogoutController::class);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::middleware('auth:sanctum')->get('/current-user', [\App\Http\Controllers\API\UserController::class, 'currentUser']);
    Route::apiResource('users', \App\Http\Controllers\API\UserController::class);
    Route::post('/pay', [\App\Http\Controllers\API\PaymentController::class, 'pay']);
    Route::resource('payments', \App\Http\Controllers\API\PaymentController::class);
});
