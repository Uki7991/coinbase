<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\User;
use App\Services\CoinbaseService;
use App\Services\UserPaymentService;
use Carbon\Carbon;
use CoinbaseCommerce\ApiClient;
use CoinbaseCommerce\Resources\Charge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PaymentController extends Controller
{
    public function pay(Request $request, CoinbaseService $coinbaseService, UserPaymentService $paymentService)
    {
        $user = User::findOrFail($request->user_id);

        $charge = $coinbaseService->createCharge([
            'name' => 'The Sovereign Individual',
            'description' => 'Mastering the Transition to the Information Age',
            'local_price' => [
                'amount' => '100.00',
                'currency' => 'USD'
            ],
            'pricing_type' => 'fixed_price'
        ]);

        $payment = $paymentService->createPayment($user, $charge);

        Cache::forget('usersList');

        return response()->json([
            'payment' => $payment,
        ]);
    }
}
