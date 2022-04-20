function catWalking(input){
    let minutesPerDay = Number(input[0]);
    let walkingsPerDays = Number(input[1]);
    let caloriesPerDays = Number(input[2]);

    let timeWalkingPerDay = minutesPerDay*walkingsPerDays
    let allCaloriesPerDay = timeWalkingPerDay*5
let minCalories = caloriesPerDays/2

if(allCaloriesPerDay>=minCalories){
console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${allCaloriesPerDay}.`);

}else{
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${allCaloriesPerDay}.`);
}

}

catWalking(["15",
"2",
"500"])

