function fishTank (input) {
    
    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]/100);

    let volumeInCm = lenght*widht*height
    let convertCmInLiter = volumeInCm * 0.001

    let waterNeeded = convertCmInLiter - (convertCmInLiter*0.17)

    console.log(waterNeeded)

}

fishTank([85,75,47,17])