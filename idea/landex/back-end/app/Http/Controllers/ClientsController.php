<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Models\Clients;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;

/**
 * @param AuthRequest $request
 * @return JsonResponse
 */

class ClientsController extends Controller
{
    final  public function login(AuthRequest $request): JsonResponse
    {
        $Clients = (new Clients())->getClientsByEmailOrPhone($request->all());

        if ($Clients && Hash::check($request->input('password'), $Clients->password)) {
            $Clients_data['token'] = $Clients->createToken($Clients->email)->plainTextToken;
            $Clients_data['name'] = $Clients->name;
            $Clients_data['email'] = $Clients->email;
            $Clients_data['phone'] = $Clients->phone;
            return response()->json($Clients_data);
        }
        throw ValidationException::withMessages([
            'email' => ['the provider credentials are incorrect']
        ]);
    }

    /**
     * @return JsonResponse
     */
    final public function logout(): JsonResponse
    {
        auth()->Clients()->currentAccessToken()->delete();
        return response()->json(['msg' => 'You have successfully logged out']);
    }


    final public function update(AuthRequest $request, $id)
    {
        $Clients = Clients::where('email', $id)->first();

        if ($Clients) {
            if ($request->filled('name')) {
                $Clients->name = $request->input('name');
            }

            if ($request->filled('password')) {
                $Clients->password = $request->input('password');
            }

            if ($request->filled('mail')) {
                $Clients->email = $request->input('mail');
            }

            if ($request->filled('phone')) {
                $Clients->phone = $request->input('phone');
            }

            $Clients->save();
        }
    }
}
