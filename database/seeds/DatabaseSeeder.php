<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);

        $cards = \Cards::all();

        foreach ($cards as $type) {
            foreach ($type as $card) {  //"Basic, classic, credits, debug, goblins, etc.
                if ($card["type"] != "Hero" && $card["type"] != "Hero Power" && $card["type"] != "Enchantment" && isset($card["cost"]) && isset($card["faction"])) {
                    print_r($card);

                    unset($card["locale"]);

                    if (isset($card["mechanics"])) {
                        $mech = $card["mechanics"];
                    }
                    unset($card["mechanics"]);

                    $cardModel = \App\Card::firstOrNew($card);
                    if (isset($mech)) {
                        $cardModel->mechanics = array_flatten($mech);
                    }

                    $cardModel->save();
                }
            }
        }


        Model::reguard();
    }
}
