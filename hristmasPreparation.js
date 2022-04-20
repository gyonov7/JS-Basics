function  christmasPreparation(input) {
    let paperRolls = Number(input[0]);
    let platRolls = Number(input[1]);
    let stickInLiters = Number(input[2]);
    let percentage = Number(input[3]);

    let paperRollsSum = paperRolls*5.8;
    let platRollsSum = platRolls*7.20;
    let stickPrice = stickInLiters*1.20;
    
    let totalSum = paperRollsSum + platRollsSum + stickPrice;

    let finalSum = totalSum - totalSum*percentage/100;

    console.log(finalSum.toFixed(3));

}
christmasPreparation(["2",
"3",
"2.5",
"25"])
