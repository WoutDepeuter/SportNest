<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ScraperController extends Controller
{
    public function runScraper(Request $request)
    {
        $sport = $request->input('sport', 'basketball');
        $category = $request->input('category', 'ballons-de-basketball');

        Log::debug('Sending request to Python server');
        $pythonServerUrl = env('PYTHON_SERVER_URL', 'http://localhost:5000');
        $response = Http::post("{$pythonServerUrl}/run-scraper", [
            'sport' => $sport,
            'category' => $category,
        ]);

        if ($response->failed()) {
            Log::error('Scraper process failed: ' . $response->body());
            return response()->json(['message' => 'Scraper process failed'], 500);
        }

        $data = $response->json('data');
        return response()->json(['message' => 'Scraper has run successfully!', 'data' => $data]);
    }
}
