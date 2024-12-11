<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;


#homepage route
Route::get('/', [UserController::class, 'index']);

#Search Result route
Route::get('/search', [UserController::class, 'search']);

#club page route
Route::get('/club/{id}', [UserController::class, 'club']);

#FAQ page route
Route::get('/faq', [UserController::class, 'faq']);

#--------------------------------------------
use App\Http\Controllers\ClubOwnerController;

#Club Owner Home route
Route::get('/clubowner', [ClubOwnerController::class, 'Home']);

#Club Owner Add Club route
Route::get('/clubowner/club/add', [ClubOwnerController::class, 'ClubAdd']);

#Club Owner Edit Club route
Route::get('/clubowner/club/edit', [ClubOwnerController::class, 'ClubEdit']);
