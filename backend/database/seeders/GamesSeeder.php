<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GamesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('games')->insert([
            ['name' => 'Mobile Legends', 'slug' => 'mobile-legends', 'code' => 'ML', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Free Fire', 'slug' => 'free-fire', 'code' => 'FF', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'PUBG Mobile', 'slug' => 'pubg-mobile', 'code' => 'PUBGM', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Genshin Impact', 'slug' => 'Genshin-impact', 'code' => 'Gensin', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Honor Of Kings', 'slug' => 'Honor-of-kings', 'code' => 'HOK', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Valorant', 'slug' => 'Valorant', 'code' => 'Valo', 'created_at' => now(), 'updated_at' => now()],
        ]);

        DB::table('topup_packages')->insert([
            // Mobile Legends
            ['game_id' => 1, 'name' => '12 Diamonds', 'amount' => 12, 'created_at' => now(), 'updated_at' => now()],
            ['game_id' => 1, 'name' => '50 Diamonds', 'amount' => 50, 'created_at' => now(), 'updated_at' => now()],
            ['game_id' => 1, 'name' => '100 Diamonds', 'amount' => 100, 'created_at' => now(), 'updated_at' => now()],
            // Free Fire
            ['game_id' => 2, 'name' => '50 Diamonds', 'amount' => 50, 'created_at' => now(), 'updated_at' => now()],
            ['game_id' => 2, 'name' => '100 Diamonds', 'amount' => 100, 'created_at' => now(), 'updated_at' => now()],
            ['game_id' => 2, 'name' => '500 Diamonds', 'amount' => 500, 'created_at' => now(), 'updated_at' => now()],
            // PUBG Mobile
            ['game_id' => 3, 'name' => '100 UC', 'amount' => 100, 'created_at' => now(), 'updated_at' => now()],
            ['game_id' => 3, 'name' => '500 UC', 'amount' => 500, 'created_at' => now(), 'updated_at' => now()],
             // Genshin Impact
            ['game_id' => 4, 'name' => '100 Genesis', 'amount' => 100, 'created_at' => now(), 'updated_at' => now()],
            ['game_id' => 4, 'name' => '500 Genesis', 'amount' => 500, 'created_at' => now(), 'updated_at' => now()],
              // Honor Of Kings
            ['game_id' => 5, 'name' => '10 Token', 'amount' => 10, 'created_at' => now(), 'updated_at' => now()],
            ['game_id' => 5, 'name' => '50 Token', 'amount' => 50, 'created_at' => now(), 'updated_at' => now()],
            // Valorant
            ['game_id' => 6, 'name' => '11 Point', 'amount' => 11, 'created_at' => now(), 'updated_at' => now()],
            ['game_id' => 6, 'name' => '51 Point', 'amount' => 51, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}