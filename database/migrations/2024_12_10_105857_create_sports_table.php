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
        Schema::create('sports', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("name");
            $table->string("description");
        });

        Schema::create('sport_tags', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("sport_id");
            $table->unsignedBigInteger("tag_id");

            $table->foreignId('sport_id')
                ->references('id')->on('sports');

            $table->foreignId('tag_id')
                ->references('id')->on('tags');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sports');
        Schema::dropIfExists('sport_tags');
    }
};
