function deerOfSanta(input){

let days = Number(input[0]);
let foodLeftInKg = Number(input[1]);
let foodPerDayFirstDeer = Number(input[2]);
let foodPerDaySecondDeer = Number(input[3]);
let foodPerDayThirdDeer = Number(input[4]);

let sumFirstDeer = days * foodPerDayFirstDeer;
let sumSecondDeer = days * foodPerDaySecondDeer;
let sumThirdDeer = days * foodPerDayThirdDeer;

let allFoodNeeded = sumThirdDeer+sumFirstDeer+sumSecondDeer;

let diff = Math.abs(foodLeftInKg - allFoodNeeded);


if(allFoodNeeded <= foodLeftInKg){

    console.log(`${Math.floor(foodLeftInKg-allFoodNeeded)} kilos of food left.`);
}else{

console.log(`${Math.ceil(allFoodNeeded-foodLeftInKg)} more kilos of food are needed.`);
}

}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])

