function hairSalon(input) {
    let target = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let earned = 0;

    while (command !== 'closed') {
        let wish = command;
        let wishType = input[index];
        index++;
        if (wish === 'haircut') {
            switch (wishType) {
                case 'mens':
                    earned += 15;
                    break;
                case 'ladies':
                    earned += 20;
                    break;
                case 'kids':
                    earned += 10;
                    break;

            }
        } else if (wish === 'color') {
            switch (wishType) {
                case 'touch up':
                    earned += 20;
                    break;
                case 'full color':
                    earned += 30;
                    break;
            }
        }
        if(earned >= target){
            console.log(`You have reached your target for the day!`);
            break;
        }
        command = input[index];
        index++;

    }
    if(earned < target){
        console.log(`Target not reached! You need ${target - earned}lv. more.`);
    }
    console.log(`Earned money: ${earned}lv.`);
}





hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])





