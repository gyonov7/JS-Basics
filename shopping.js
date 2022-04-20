function shopping (input){
let budget = Number(input[0]);
let videoCards = Number(input[1]);
let processors = Number(input[2]);
let ram = Number(input[3]);

let videoCardPrice = videoCards * 250;
let processorPrice = videoCardPrice*0.35;
let ramPrice = videoCardPrice*0.1;

let totalSum = videoCardPrice + 
processorPrice*processors + 
ram*ramPrice;

if(videoCards>processors){
totalSum = totalSum*0.85
}
let diff = Math.abs(totalSum - budget).toFixed(2)
if(totalSum<=budget){
console.log(`You have ${diff} leva left!`);
}else{
    console.log(`Not enough money! You need ${diff} leva more!`);
}

}

shopping(["920.45",
"3",
"1",
"1"])

