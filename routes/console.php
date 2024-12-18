<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();


// command: "php artisan logs:clear", easier to see when we're going to check the logs for password reset
Artisan::command('logs:clear', function () {
    exec('rm ' . storage_path('logs/*.log'));
    $this->info('Logs have been cleared!');
})->purpose('Clear all log files');