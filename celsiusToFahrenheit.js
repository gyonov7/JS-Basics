function celsiusToFahrenheit(input){

    let grad = Number(input[0]);

    let formula = grad*1.8 + 32

    console.log(formula.toFixed(2));
}

celsiusToFahrenheit(['-5'])