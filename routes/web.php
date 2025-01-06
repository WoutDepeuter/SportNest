<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\{AdminController,
    Auth\AuthenticatedSessionController,
    ClubController,
    ClubOwnerController,
    ProfileController,
    QuizController,
    ScraperController,
    SearchController,
    SportController,
    TagController,
    UserController,
    Reviewcontroller};

#-------------------------------------------------------
# Public Routes
#-------------------------------------------------------
Route::get('/', [UserController::class, 'index'])->name('home');
Route::get('/search', [UserController::class, 'search']);
Route::get('/club/{id}', [ClubController::class, 'ClubPage'])->name('club.page');
Route::get('/faq', [UserController::class, 'faq']);
Route::get('/isAdmin', [AdminController::class, 'isAdmin'])->name('isAdmin');

# Review Routes
Route::middleware(['auth'])->group(function () {
    Route::post('/review', [Reviewcontroller::class, 'store'])->name('review.store');
});

# Quiz Routes
Route::get("/quiz", [QuizController::class, 'index']);
Route::post("/quiz/result", [QuizController::class, 'findWithWeigh']);

Route::middleware(['auth'])->group(function () {

    Route::post('/sports', [SportController::class, 'create']);
    Route::put('/sports/{id}', [SportController::class, 'update']);
    Route::delete('/sports/{id}', [SportController::class, 'delete']);

    Route::post('/tags', [TagController::class, 'create']);
    Route::put('/tags/{id}', [TagController::class, 'update']);
    Route::delete('/tags/{id}', [TagController::class, 'delete']);
});

// Review Routes
Route::get('/club/{id}/reviews', [Reviewcontroller::class, 'getReviewsByClub']);

#-------------------------------------------------------
# Club Owner Routes (Requires Authentication)
#-------------------------------------------------------
Route::middleware(['auth'])->prefix('clubowner')->group(function () {
    Route::get('/', [ClubOwnerController::class, 'home']);
    Route::get('/club/add', [ClubOwnerController::class, 'ClubAdd']);
    Route::get("/club/new", [ClubOwnerController::class, 'ClubNew'])->name('club.new');
    Route::get("/club/edit/{id}", [ClubOwnerController::class, 'ClubEdit']);
    Route::put("/club/update", [ClubOwnerController::class, 'Update'])->name('club.update');
    Route::delete("/club/delete/{id}", [ClubOwnerController::class, 'DeleteClub'])->name('club.delete');

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
    Route::get('/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::post('/verify/{id}', [AdminController::class, 'verify']);
    Route::post('/unverify/{id}', [AdminController::class, 'unverify']);
});

#-------------------------------------------------------
# Authenticated User Routes
#-------------------------------------------------------
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [UserController::class, 'Dashboard'])->middleware('verified')->name('dashboard');

    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});

#-------------------------------------------------------
# Utility Routes
#-------------------------------------------------------
Route::post('/run-scraper', [ScraperController::class, 'runScraper']);

# Include Auth Routes
require __DIR__.'/auth.php';
