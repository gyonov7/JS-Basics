function harvest(input) {

    let x = Number(input[0]);
    
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let harvest = x * y
    let vinoLiters = harvest * 0.4 / 2.5;
    

    let diff = Math.abs(z - vinoLiters);
    let wineProworker = Math.ceil(diff / workers);

    if (vinoLiters < z) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(vinoLiters)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${wineProworker} liters per person. `);
    }

}
harvest([
    1020,
1.5,
425,
4
])
