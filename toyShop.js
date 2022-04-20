function toyShop(input) {
    let excursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    // Пъзел - 2.60 лв.
    //Говореща кукла - 3 лв.
    //Плюшено мече - 4.10 лв.
    //	Миньон - 8.20 лв.
    //	Камионче - 2 лв.

    let countToys = puzzles + dolls +
        bears + minions + trucks;
    let sumToys = puzzles * 2.60 + dolls * 3 + bears * 4.10 +
        minions * 8.20 + trucks * 2;


    if (countToys >= 50) {
        sumToys = sumToys * 0.75

    }
    let rent = sumToys * 0.1
    let totalForPetya = sumToys - rent;

    let diff = Math.abs(totalForPetya - excursion);

    if (totalForPetya >= excursion) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])






