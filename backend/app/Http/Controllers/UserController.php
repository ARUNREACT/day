<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    function index()
    {
        return "Hello";
    }

    function register(Request $req)
    {
        $rules = [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6',
        ];

        $validator = Validator::make($req->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user = new User;
        $user->name =$req->input('name');
        $user->email =$req->input('email');
        $user->password =Hash::make($req->input('password'));
        $user->save();

        return response()->json(['user' => $user], 201);
    }

    function login(Request $req)
    {
        $rules = [
        'email' => 'required|string|email|max:255',
        'password' => 'required|string|min:6',
        ];

        $validator = Validator::make($req->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user=User::where('email',$req->email)->first();
        if(!$user||!Hash::check($req->password,$user->password))
        {
            return response()->json(['error' => 'Email or password incorrect'], 401);
        }
        return response()->json(['user' => $user], 200);
    }
}
