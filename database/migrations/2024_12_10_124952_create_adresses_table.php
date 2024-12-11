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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("address");
            $table->integer("postcode");
            $table->integer("nr");
            $table->string("location");
            $table->string("coords");
        });

        Schema::table('sport_clubs', function (Blueprint $table) {
            $table->foreignId("address_id")
                ->constrained("id")->on("addresses");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
        Schema::table('sport_clubs', function (Blueprint $table) {
            $table->removeColumn("address_id");
        });
    }
};
