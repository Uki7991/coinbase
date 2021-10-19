<?php

namespace App\Http\Controllers\API\Auth;

use App\Actions\Fortify\CreateNewUser;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function __invoke(Request $request, CreateNewUser $createNewUserAction)
    {
        /**
         * @var User $user
         */
        $user = $createNewUserAction->create($request->all());

        return response()->json([
            'token' => $user->createToken('API token')->plainTextToken,
        ]);
    }
}
