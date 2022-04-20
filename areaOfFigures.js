function areaOfFigures(input) {

    let figure = input[0];

    if (figure === 'square') {
        let a = Number(input[1])
        console.log((Math.pow(a, 2)).toFixed(3));
    } else if (figure === 'rectangle') {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let resultRecta = a * b
        console.log(resultRecta.toFixed(3));
    } else if (figure === 'circle') {
        let radius = Number(input[1]);
        let result = ((radius * radius) * Math.PI)
        console.log(result.toFixed(3));
    } else if (figure === 'triangle') {
        let a = Number(input[1]);
        let ha = Number(input[2]);
        let result = a * ha / 2
        console.log((result).toFixed(3));
    }

}

areaOfFigures(['rectangle', '7', '2.5'])