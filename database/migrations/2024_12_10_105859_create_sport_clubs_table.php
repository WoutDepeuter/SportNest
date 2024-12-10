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
        Schema::create('sport_clubs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
        });

        Schema::create('sport_club_sports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sport_club_id');
            $table->unsignedBigInteger('sport_id');

            $table->foreignId('sport_club_id')
                ->references('id')->on('sport_clubs');

            $table->foreign('sport_id')
                ->references('id')->on('sports');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sport_clubs');
    }
};
