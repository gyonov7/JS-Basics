function aluminumJoinery(input) {

    let joinery = Number(input[0]);
    let type = input[1];
    let deliveryType = input[2];
    let price = 0;
    let fullPrice = 0;

    if (joinery <= 10) {
        console.log(`Invalid order`);
        return;
    }
    switch (type) {
        case '90X130':
            price = 110*joinery;
            if (joinery >= 60) {
                price *= 0.92
            } else if (joinery >= 30) {
                price *= 0.95
            }
            break;
        case '100X150':
            price = 140 * joinery;  
            if (joinery >= 80) {
                price *= 0.90
            } else if (joinery >= 40) {
                price *= 0.94
            }
            break;
        case '130X180':
            price = 190 * joinery;
            if (joinery >= 50) {
                price *= 0.88
            } else if (joinery >= 20) {
                price *= 0.93
            }
            break;
        case '200X300':
            price = 250 * joinery;
            if (joinery >= 50) {
                price *= 0.86
            } else if (joinery >= 25) {
                price *= 0.91
            }
            break;

    }
    if (deliveryType === 'With delivery') {
        price += 60;

    }else{
        price = price;
    }

    if (joinery >= 99) {
        price *= 0.96;
    }

    console.log(`${price.toFixed(2)} BGN`);
}

aluminumJoinery(["105",
    "100X150",
    "With delivery"])