<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\{
    AdminController,
    Auth\AuthenticatedSessionController,
    ClubController,
    ClubOwnerController,
    ProfileController,
    QuizController,
    ScraperController,
    SearchController,
    UserController
};

#-------------------------------------------------------
# Public Routes
#-------------------------------------------------------
Route::get('/', [UserController::class, 'index']);
Route::get('/search', [UserController::class, 'search']);
Route::get('/club/{id}', [ClubController::class, 'ClubPage'])->name('club.page');
Route::get('/faq', [UserController::class, 'faq']);

# Quiz Routes
Route::get("/quiz", [QuizController::class, 'index']);
Route::post("/quiz/result", [QuizController::class, 'findWithWeigh']);

#-------------------------------------------------------
# Club Owner Routes (Requires Authentication)
#-------------------------------------------------------
Route::middleware(['auth'])->prefix('clubowner')->group(function () {
    Route::get('/', [ClubOwnerController::class, 'home']);
    Route::get('/club/add', [ClubOwnerController::class, 'ClubAdd']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

#-------------------------------------------------------
# Search Routes
#-------------------------------------------------------
Route::post("/search/filter", [SearchController::class, "filter"]);
Route::get("/search/filters", [SearchController::class, "filterItems"]);

#-------------------------------------------------------
# Admin Routes (Requires Admin Role)
#-------------------------------------------------------
Route::middleware(['auth', 'isAdmin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index']);
    Route::post('/verify/{id}', [AdminController::class, 'verify']);
});

#-------------------------------------------------------
# Authenticated User Routes
#-------------------------------------------------------
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware('verified')->name('dashboard');

    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});

#-------------------------------------------------------
# Utility Routes
#-------------------------------------------------------
Route::post('/run-scraper', [ScraperController::class, 'runScraper']);

# Include Auth Routes
require __DIR__.'/auth.php';
