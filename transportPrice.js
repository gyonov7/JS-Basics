function transportPrice(input) {
    let n = Number(input[0]);
    let dayOrNight = String(input[1]);


    // < 20 km
    let taxiDay = 0.7 + 0.79 * n;
    let taxiNight = 0.7 + 0.9 * n;

    // >=20 km
    let bus = n * 0.09;

    // >=100
    let train = n * 0.06

    if (n < 20) {
        if (dayOrNight === 'day') {
            console.log(taxiDay.toFixed(2));
        } else {
            console.log(taxiNight.toFixed(2));
        }

    } if (n >= 100) {
        console.log(train.toFixed(2));
    } else if (n >= 20) {
        console.log(bus.toFixed(2));
    }

}
transportPrice(['25', 'day'])