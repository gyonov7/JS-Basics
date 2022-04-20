function cleverLily(input) {
    let index = 0;
    let age = Number(input[index]);
    index++;
    let washingMachine = Number(input[index]);
    index++;
    let toyPrice = Number(input[index]);
    index++;
    let spareMoney = 0;
    let sum = 0;
let oddCounter =0;

    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            spareMoney += 10;
            sum += spareMoney-1
        }else {
            oddCounter++;
        }
    }
    
let sumToys = oddCounter*toyPrice;
let allMoney = sum + sumToys;
let diff = allMoney-washingMachine;

if(diff>=0){
    console.log(`Yes! ${diff.toFixed(2)}`);
}else{
    console.log(`No! ${Math.abs(diff).toFixed(2)}`);
}
}
cleverLily(["21",
"1570.98",
"3"])

