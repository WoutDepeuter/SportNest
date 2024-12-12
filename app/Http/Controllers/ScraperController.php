<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class ScraperController extends Controller
{
    public function runScraper(Request $request)
    {
        $process = new Process(['python3', '/scripts/DecathlonScraper.py']);
        $process->run();

        // Check if the process succeeded
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        // Return a response indicating that the scraper has completed
        return response()->json(['message' => 'Scraper has run successfully!']);
    }
}
