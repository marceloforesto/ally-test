<?php

use Illuminate\Http\Request;

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

Route::get('/schools', 'App\Http\Controllers\SchoolController@index');
Route::get('/schools/{id}', 'App\Http\Controllers\SchoolController@show');
Route::post('/schools', 'App\Http\Controllers\SchoolController@store');
Route::delete('/schools/{id}', 'App\Http\Controllers\SchoolController@delete');
Route::put('/schools', 'App\Http\Controllers\SchoolController@update');

Route::get('/courses', 'App\Http\Controllers\CourseController@index');
Route::get('/courses/{id}', 'App\Http\Controllers\CourseController@show');
Route::post('/courses', 'App\Http\Controllers\CourseController@store');
Route::delete('/courses/{id}', 'App\Http\Controllers\CourseController@delete');
Route::put('/courses', 'App\Http\Controllers\CoursesController@update');