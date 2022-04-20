function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let price = 0;

    switch (season) {
        case 'Spring':
            price = 3000;
            if (fishermen <= 6) {
                price = 3000 * 0.9
            } else if (fishermen <= 11) {
                price = 3000 * 0.85
            } else {
                price = 3000 * 0.75
            }
            break;

        case 'Summer':
        case 'Autumn':
            price = 4200;
            if (fishermen <= 6) {
                price = 4200 * 0.9
            } else if (fishermen <= 11) {
                price = 4200 * 0.85
            } else {
                price = 4200 * 0.75
            }
            break;
        case 'Winter':
            price = 2600;
            if (fishermen <= 6) {
                price = 2600 * 0.9
            } else if (fishermen <= 11) {
                price = 2600 * 0.85
            } else {
                price = 2600 * 0.75
            }
            break;

        default:
            console.log('error');
            break;
    }
    if (fishermen % 2 === 0 && (season === 'Summer' || season === 'Winter' || season === 'Spring')) {
        price = price * 0.95
    }
    let diff = budget - price
    if (diff >= 0) {
        console.log(`Yes! You have ${Math.abs(diff).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
    }
}
fishingBoat(["2000",
"Winter",
"10"])


