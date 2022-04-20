function accountBalance(input) {
    let index = 0;
    let money = input[0];
    index++;
    let sum = 0;

    while (money !== "NoMoreMoney") {

        let num = Number(money)
        if (money < 0){
            console.log(`Invalid operation!`);
            
            break;
        }
        console.log(`Increase: ` + num.toFixed(2));
        sum += num;
        money = input[index];
        index++;
        
        
    }
    console.log(`Total: ${sum.toFixed(2)}`);


}
accountBalance(['5.51' ,  '69.42','100','NoMoreMoney'])

