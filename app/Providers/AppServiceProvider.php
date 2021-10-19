<?php

namespace App\Providers;

use App\Services\CoinbaseService;
use App\Services\UserPaymentService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(CoinbaseService::class, function ($app) {
            return new CoinbaseService();
        });
        $this->app->bind(UserPaymentService::class, function ($app) {
            return new UserPaymentService();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
