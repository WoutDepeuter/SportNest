<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table("sport_clubs", function (Blueprint $table) {
            $table->string("verified")->default(false)->change();
        });

        DB::table('sport_clubs')->update(['verified' => true]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("sport_clubs", function (Blueprint $table) {
            $table->dropColumn("verified");
        });
    }
};
