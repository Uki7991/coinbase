<?php

namespace App\Services;

use CoinbaseCommerce\Resources\Charge;

class CoinbaseService
{
    public function __construct()
    {
        \CoinbaseCommerce\ApiClient::init(env('COINBASE_API_KEY'));
    }

    public function createCharge($data)
    {
        return Charge::create($data);
    }
}
