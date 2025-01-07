<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a default admin user
        $adminUser = User::create([
            'name' => 'Default Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'), // Replace 'password' with the actual password
        ]);

        // Assign the admin role to the default admin user
        UserRole::create([
            'user_id' => $adminUser->id,
            'role' => UserRole::$ADMIN,
        ]);
    }
}
