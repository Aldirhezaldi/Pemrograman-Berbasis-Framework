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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('admin', function () { return view('admin'); })->middleware('checkRole:admin');
Route::get('siswa', function () { return view('siswa'); })->middleware(['checkRole:siswa,admin']);

Route::view('/pendaftaran/articles', 'pendaftaran');
Route::view('/pendaftaran/article/edit/{id}', 'pendaftaran');
Route::view('/pendaftaran/article/{id}', 'pendaftaran');
Route::view('/pendaftaran', 'pendaftaran');
Route::view('/{path}', 'pendaftaran');

Route::view('/list/articles', 'list');
Route::view('/list/article/edit/{id}', 'list');
Route::view('/list/article/{id}', 'list');
Route::view('/list', 'list');
Route::view('/{path}', 'list');
