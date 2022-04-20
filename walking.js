function walking(input) {
    let goal = 10000;
    let index = 0;
    let command = input[index];
    index++;
    let sumSteps = 0;
    let goalAchieved = true;

    while (command !== 'Going home') {
        steps = Number(command);
        sumSteps += steps;
        let diff = Math.abs(sumSteps - 10000);
        if (sumSteps >= 10000) {
            goalAchieved = false;
            console.log(`Goal reached! Good job! \n${diff} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    let stepCount = Number(input[index]);
    index++;
    sumSteps += stepCount;
    let diff = Math.abs(sumSteps - 10000);
    if (goalAchieved) {
        if (sumSteps <= 10000) {
            console.log(`${diff} more steps to reach goal.`);

        } else {
            console.log(`Goal reached! Good job! \n${diff} steps over the goal!`);

        }
    }

}
walking(["1000",
    "1500",
    "2000",
    "6500"])







