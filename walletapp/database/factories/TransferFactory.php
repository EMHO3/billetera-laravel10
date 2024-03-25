<?php

namespace Database\Factories;

use App\Models\Transfer;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransferFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Transfer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'descripcion' => $this->faker->text($maxNbChars = 200),
            'monto' => $this->faker->numberBetween($min = 10, $max = 90),
            'wallet_id' => $this->faker->randomDigitNotNull,
        ];
    }
}    