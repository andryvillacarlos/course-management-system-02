<?php
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
      ->middleware([
        'auth:admin', 
        \App\Http\Middleware\CheckGuardAbility::class . ':admin,access-admin'
      ])
      ->group(function () {
        Route::get('/dashboard',fn() => inertia('AdminPage'))->name('admin.dashboard');
      });
