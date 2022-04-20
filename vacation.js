function vacation(input) {
    let index = 0;
    let excursion = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let daysCounter = 0;
    let spendCounter = 0;
    let isSaveMoney = true;
    while (money < excursion) {
        daysCounter++;
        let type = input[index];
        index++;
        let sum = Number(input[index]);
        index++;

        if (type === 'save') {
            spendCounter = 0;
            money += sum;
        } else if (type === 'spend') {
            spendCounter++;
            money -= sum;
            if (money < 0) {
                money = 0;
            }
        }
        if (spendCounter === 5) {
            isSaveMoney = false;
            console.log(`You can't save the money.`);
            console.log(`${daysCounter}`);
            break;
        }

    }
    if (isSaveMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }

}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])



