<?php

use App\Http\Middleware\CheckAdminRole;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
        $middleware->alias(['isAdmin' => CheckAdminRole::class]);

        $middleware->web(append: [
           HandleInertiaRequests::class,
        ]);

        $middleware->validateCsrfTokens(
            except: ['/search/filter', "/quiz/result", "/isAdmin"]
        );
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
