function worldSwimmingRecord (input){
    let recordInSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

let resultIvanInSeconds = distance * secondsPerMeter
let addOn = Math.floor(distance/15) * 12.5

let finalResult = resultIvanInSeconds + addOn
let diff = Math.abs(recordInSeconds - finalResult)
if(finalResult<recordInSeconds){
console.log(`Yes, he succeeded! The new world record is ${finalResult.toFixed(2)} seconds.`);
}else{
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
}

}

worldSwimmingRecord ([55555.67,
3017,
5.03])

