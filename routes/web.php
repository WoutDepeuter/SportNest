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
