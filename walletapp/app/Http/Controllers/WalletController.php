<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function index(){
      
        $wallet=Wallet::firstOrFail();
        return response()->json($wallet->load('transfers'),200);
        return response()->json($wallet,200);
    }
}
