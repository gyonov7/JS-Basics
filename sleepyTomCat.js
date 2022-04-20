function sleepyTomCat(input){
    let daysOff = Number(input);
    let workDays = 365 - daysOff;
    let normalPlayTime = workDays*63 + daysOff*127;

    let diff = Math.abs(30000-normalPlayTime);

    let hours = Math.floor(diff/60);
    
    let minutes = diff%60
    

if(normalPlayTime>30000){
console.log('Tom will run away');
console.log(`${hours} hours and ${minutes} minutes more for play`);
}else{
    console.log('Tom sleeps well');
    console.log(`${hours} hours and ${minutes} minutes less for play`);
}

}

sleepyTomCat(['113'])
