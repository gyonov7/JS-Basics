function yardGreening(input){

    // price for m2 = 7.61
    // discount = 18% from totalsum
// The final price is: 'kraina cena na uslugata' lv.
// The discount is: 'otstypka' lv.

    let quaterMeter = Number(input[0]);
let finalPrice = quaterMeter * 7.61
let discount = finalPrice*0.18
let grandTotal = finalPrice - discount

console.log('The final price is: ' + grandTotal + ' lv.');
console.log('The discount is: ' + discount + ' lv.');

}

yardGreening([550])