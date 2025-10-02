<?php

namespace App\Providers;

use App\Session\CustomDatabaseSessionHandler;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Optimize Vite prefetching (optional, just a Laravel Breeze feature)
        Vite::prefetch(concurrency: 3);

        // Register custom session driver
        Session::extend('custom_database', function ($app) {
            $connection = DB::connection($app['config']['session.connection']);

            return new CustomDatabaseSessionHandler(
                $connection,
                $app['config']['session.table'],
                $app['config']['session.lifetime'],
                $app
            );
        });
    }
}
