function vegetableMarket(input){

    let priceVeg = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kgVeg = Number(input[2]);
    let kgFruits = Number(input[3]);

    let sumVeg = priceVeg*kgVeg
    let sumFruits = priceFruits*kgFruits

    let totalLv = sumFruits + sumVeg

    let total = totalLv/1.94

    console.log(total.toFixed(2));
}

vegetableMarket(['0.194','19.4','10','10'])