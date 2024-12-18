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
        $response = Http::post('http://localhost:5000/run-scraper', [
            'sport' => $sport,
            'category' => $category,
        ]);

        if ($response->failed()) {
            Log::error('Scraper process failed: ' . $response->body());
            return response()->json(['message' => 'Scraper process failed', 'error' => $response->body()], 500);
        }

        $data = $response->json('data');

        if (!$data) {
            Log::error('No data returned from scraper');
            return response()->json(['message' => 'No data returned from scraper'], 500);
        }

        Log::debug('Scraper process completed successfully');
        return response()->json(['message' => 'Scraper has run successfully!', 'data' => $data]);
    }
}
