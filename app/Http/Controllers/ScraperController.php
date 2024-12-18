<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Illuminate\Support\Facades\Log;

class ScraperController extends Controller
{
    public function runScraper(Request $request)
    {
        $sport = $request->input('sport', 'basketball');
        $category = $request->input('category', 'ballons-de-basketball');

        Log::debug('Starting scraper process');
        $process = new Process(['python3', base_path('scripts/DecathlonScraper.py'), $sport, $category]);
        $process->run();

        // Check if the process succeeded
        if (!$process->isSuccessful()) {
            Log::error('Scraper process failed: ' . $process->getErrorOutput());
            return response()->json(['message' => 'Scraper process failed', 'error' => $process->getErrorOutput()], 500);
        }

        Log::debug('Scraper process completed successfully');
        // Return a response indicating that the scraper has completed
        return response()->json(['message' => 'Scraper has run successfully!']);
    }
}
