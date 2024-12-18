<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

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
Route::get('/clubowner', [ClubOwnerController::class, 'Home'])->middleware('auth');

#Club Owner Add Club route
Route::get('/clubowner/club/add', [ClubOwnerController::class, 'ClubAdd'])->middleware('auth');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/clubowner/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/clubowner/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/clubowner/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

#--------------------------------------------
use App\Http\Controllers\ScraperController;

Route::post('/run-scraper', [ScraperController::class, 'runScraper']);

require __DIR__.'/auth.php';
