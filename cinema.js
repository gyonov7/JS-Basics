function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;
let count = rows*columns
    switch (type) {
        case 'Premiere': 
        income = count*12.00
        break;
        case 'Normal':
        income = count*7.50    
        break;
        case 'Discount': 
        income = count*5.00
        break;
default:
    console.log('error');
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"])


