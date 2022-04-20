function addBagage(input) {
    let priceOver20Kg = Number(input[0]);
    let kgBagage = Number(input[1]);
    let dayTilDeparture = Number(input[2]);
    let countBagage = Number(input[3]);

    if (kgBagage < 10) {
        priceBagage = priceOver20Kg * 0.2;
    } else if (kgBagage <= 20) {
        priceBagage = priceOver20Kg * 0.5
    } else {
        priceBagage = priceOver20Kg
    }

    if (dayTilDeparture > 30) {
        priceBagage = priceBagage * 1.1
    } else if (dayTilDeparture >= 7) {
        priceBagage = priceBagage * 1.15
    } else {
        priceBagage = priceBagage * 1.4

    }

    let final = priceBagage * countBagage

    console.log(`The total price of bags is: ${final.toFixed(2)} lv.`);
}

addBagage(["2",
    "0.5",
    "0.5",
    "1"])





