<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TopupController extends Controller
{
    public function topup(Request $request)
    {
        // Validasi input
        $request->validate([
            'user_id' => 'required|integer',
            'game_id' => 'required|integer',
            'package_id' => 'required|integer',
            'player_id' => 'required|string',
            'payment_method' => 'required|string',
        ]);

        // Mapping package_id ke amount
        $packages = [
            1 => 20,
            2 => 50,
            3 => 100,
        ];

        $packageId = $request->package_id;
        $amount = $packages[$packageId] ?? 0; // default 0 jika tidak ada

        // Di sini bisa ditambahkan logic topup, simpan ke database, dll.

        return response()->json([
            'status' => 'success',
            'message' => "Topup berhasil",
            'topup_id' => $packageId,
            'amount' => $amount
        ]);
    }
}
