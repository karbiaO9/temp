<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Clients;

class clientseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        {
        $data = [
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'phone' => '96385274',
            'adress' => 'test',
            'password' => Hash::make('12345678'),




        ];
        Clients::create($data);
    }
    }
}
