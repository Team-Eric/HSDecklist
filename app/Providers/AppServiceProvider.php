<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \App\User::created(function ($user) {
            \Mail::raw("Welcome to Wellmet.me!", function ($message) use ($user) {
                $message->from("admin@wellmet.me", "WellMet");
                $message->to($user->email, $user->name);
            });
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
