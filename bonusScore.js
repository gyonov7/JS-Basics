function bonusScore(input) {
    let num = Number(input[0]);
    let bonus = 0;


    if (num <= 100) {
        bonus = bonus + 5;

    } else if (num > 1000) {
        bonus = num * 0.1
    }else if (num > 100) {
        bonus = num * 0.2
    } 

    let evenOdd = Number(num % 2);
    if (evenOdd === 0) {
        bonus = bonus + 1
    }
    let endOnFive = Number(num % 10)
    if (endOnFive === 5) {
        bonus = bonus + 2
    }
    console.log(bonus);
    console.log(num + bonus);


}
bonusScore(["15875"])