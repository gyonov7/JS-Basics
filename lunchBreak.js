function lunchBreak(input) {
    let nameSeries = input[0];
    let durationSeries = Number(input[1]);
    let durationBreak = Number(input[2]);
    let lunchTime = durationBreak / 8
    let relaxTime = durationBreak / 4

    let neededTime = durationSeries + lunchTime +
        relaxTime;

    let diff = Math.ceil(Math.abs(durationBreak - neededTime));
   

    if (durationBreak >= neededTime) {
        console.log(`You have enough time to watch ${nameSeries} and left with ${diff} minutes free time.`);
    } else{
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${diff} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",
    "48",
    "60"])








