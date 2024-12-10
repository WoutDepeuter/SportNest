<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Homepage');
    }

    public function search()
    {
        return Inertia::render('SearchResult');
    }

    public function club($id)
    {
        return Inertia::render('ClubPage', ['id' => $id]);
    }

    public function faq()
    {
        return Inertia::render('FAQPage');
    }
}
