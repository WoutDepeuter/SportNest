<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

#homepage route
Route::get('/', function () {
    return Inertia::render('Homepage');
});

#Search Result route
Route::get('/Search-Result', function () {
    return Inertia::render('SearchResult');
});

#club page route
Route::get('/Club-Page', function () {
    return Inertia::render('ClubPage');
});

#FAQ page route
Route::get('/FAQ', function () {
    return Inertia::render('FAQPage');
});
