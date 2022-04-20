function circleAreaAndPerimeter(input) {

    let r = Number(input);
    let test = (r*r).toFixed(3)

    let area = Math.PI * test
    let perimeter = 2 * Math.PI * r

    console.log(`${area.toFixed(2)}`);
    
    console.log(`${perimeter.toFixed(2)}`);
}

circleAreaAndPerimeter(['35.875'])

