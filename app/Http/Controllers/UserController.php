<?php

namespace App\Http\Controllers;
use App\Models\SportClub;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function Dashboard()
    {
        return Inertia::render('Dashboard', [
            'clubs' => SportClub::where("user_id", "=", request()->user()->id)->get()
        ]);
    }

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
