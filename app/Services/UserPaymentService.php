<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\User;
use \CoinbaseCommerce\Resources\Charge;

class UserPaymentService
{
    public function createPayment(User $user, Charge $charge): \App\Models\Payment
    {
        return $user->payments()->create([
            'code' => $charge->code,
            'title' => $charge->name,
            'hosted_url' => $charge->hosted_url,
            'created_at_coinbase' => Carbon::parse($charge->created_at),
            'expires_at_coinbase' => Carbon::parse($charge->expires_at),
            'amount' => $charge->pricing['local']['amount'],
            'pricing_type' => $charge->pricing_type,
            'currency' => $charge->pricing['local']['currency'],
        ]);
    }
}
