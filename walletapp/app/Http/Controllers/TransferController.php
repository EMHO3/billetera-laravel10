<?php

namespace App\Http\Controllers;

use App\Models\Transfer;
use App\Models\Wallet;
use Illuminate\Http\Request;

class TransferController extends Controller
{
    public function store(Request $request){
        $wallet=Wallet::find($request->wallet_id);
        $wallet->money=$wallet->money +$request->monto;
        $wallet->update();

        $transfer=new Transfer();
        $transfer->descripcion =$request->descripcion;
        $transfer->monto=$request->monto;
        $transfer->wallet_id=$request->wallet_id;
        $transfer->save();

        return response()->json($transfer,201);

    }
}
