function firm(input){

let hoursNeeded = Number(input[0]);
let daysOnTable = Number(input[1]);
let overtimeWorkers = Number(input[2]);

let hoursAfter = daysOnTable*0.9*8

let overTime = overtimeWorkers*daysOnTable*2

let allHours = Math.floor(hoursAfter + overTime)
let diff = Math.abs(allHours-hoursNeeded)


if(hoursNeeded<=allHours){
console.log(`Yes!${diff} hours left.`);

}else{
    console.log(`Not enough time!${diff} hours needed. `);
}

}

firm(['90','7','3'])