function housePainting (input){
let x = Number(input[0]);
let y = Number(input[1]);
let h = Number(input[2]);

let frontside = Math.pow(x,2);
let frontPlusBack = frontside*2;
let frontPlusBackFinal = frontPlusBack - (1.2*2);

let leftside = x * y;
let bothSides = 2*(x*y)-2*(Math.pow(1.5,2));

let roofSide = 2*(x*y);
let roofFront = 2*(x*h/2);

//green - frontPlusBackFinal & bothSides
// red - roofSide & roofFront

let greenColor = frontPlusBackFinal+bothSides;
let redColor = roofFront+roofSide;

let greenResult = greenColor/3.4;
let redResult = redColor/4.3;

console.log(greenResult.toFixed(2));
console.log(redResult.toFixed(2));

}

housePainting(['6','10','5.2'])