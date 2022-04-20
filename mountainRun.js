function mountainRun(input){
    let recordInSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSecondsPerMeter = Number(input[2]);

    let timeClimbing = distance*timeInSecondsPerMeter
let slow = Math.floor(distance/50)
let slower = slow*30

let timeGeorgeInSec = timeClimbing + slower

let diff = Math.abs(recordInSeconds - timeGeorgeInSec)

if(timeGeorgeInSec<recordInSeconds){
console.log(`Yes! The new record is ${timeGeorgeInSec.toFixed(2)} seconds.`);

}else{
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
}

}

mountainRun(["1377",
"389",
"3"])


