function depositCalculator (input) {

    let depositSum = Number (input[0]);
    let months = Number (input[1]);
    let intrest = Number (input[2]) / 100;

    let result = depositSum + months * ((depositSum*intrest)/12);

    console.log(result);

}

depositCalculator([200,3,5.7])