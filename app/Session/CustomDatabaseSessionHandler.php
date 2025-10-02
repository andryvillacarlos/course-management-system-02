<?php

namespace App\Session;

use Illuminate\Session\DatabaseSessionHandler;
use Illuminate\Contracts\Container\Container;
use Illuminate\Support\Facades\Auth;

class CustomDatabaseSessionHandler extends DatabaseSessionHandler
{
    public function __construct($connection, $table, $lifetime, Container $container = null)
    {
        parent::__construct($connection, $table, $lifetime, $container);
    }

    protected function getDefaultPayload($data)
    {
        $payload = parent::getDefaultPayload($data);

        if (Auth::check()) {
            $payload['authenticatable_id'] = (string) Auth::id(); // cast to string for UUID support
            $payload['authenticatable_type'] = get_class(Auth::user());
        } else {
            $payload['authenticatable_id'] = null;
            $payload['authenticatable_type'] = null;
        }

        unset($payload['user_id']); // remove old column

        return $payload;
    }
}
    