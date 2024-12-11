<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table("sport_clubs", static function (Blueprint $table) {
            $table->string("website_url");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("sport_clubs", static function (Blueprint $table) {
            $table->dropColumn("website_url");
        });
    }
};
