<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->string("cardId")->primary();
            $table->string('name');
            $table->string("cardSet");
            $table->string("type");
            $table->string("faction")->nullable();
            $table->string("rarity")->nullable();
            $table->integer("cost");
            $table->integer("attack")->nullable();
            $table->integer("health")->nullable();
            $table->integer("durability")->nullable();
            $table->text("text")->nullable();
            $table->text("inPlayText")->nullable();
            $table->text("flavor")->nullable();
            $table->string("artist")->nullable();
            $table->boolean("collectible")->default(false);
            $table->boolean("elite")->default(false);
            $table->string("race")->nullable();
            $table->string("playerClass")->nullable();
            $table->string("howToGet")->nullable();
            $table->string("howToGetGold")->nullable();
            $table->string("img");
            $table->string("imgGold");
            $table->string("mechanics")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cards');
    }
}
