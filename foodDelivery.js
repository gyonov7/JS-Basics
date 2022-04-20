function foodDelivery(input){

let chichenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let veganMenu = Number(input[2]);

let chichenSum = chichenMenu * 10.35
let fishSum = fishMenu * 12.40
let veganSum = veganMenu * 8.15 

let totalSecond = chichenSum + fishSum + veganSum

let desertSum = totalSecond * 0.2

let delivery = 2.50

let finalBill = totalSecond + desertSum + delivery

console.log(finalBill)

}

foodDelivery([2,4,3])