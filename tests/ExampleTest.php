<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        $this->visit('/')
             ->see('Laravel 5');
    }

    public function testCardAPI()
    {
        $card = \Cards::get("Ysera");

        //1 Result back, 1 card
        $this->assertEquals(1, count($card));

        $this->assertEquals("Ysera", $card[0]["name"]);
        $this->assertEquals("EX1_572", $card[0]["cardId"]);
    }
}
