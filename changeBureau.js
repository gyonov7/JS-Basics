function changeBureau(input){
    let bitcoin = Number(input[0]);
    let joan = Number(input[1]);
    let commissionPercentage = Number(input[2]);

    let bitcoinInLeva = bitcoin*1168
    let joanInDolar = joan*0.15
    let joanInLeva = joanInDolar*1.76
    
    let sumMed = (bitcoinInLeva + joanInLeva)/1.95 
    let commission = commissionPercentage*sumMed/100

    let total = sumMed - commission
    console.log(total.toFixed(2));
}

changeBureau(["1",
"5",
"5"])
