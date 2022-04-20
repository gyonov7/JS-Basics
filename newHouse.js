function newHouse(input) {
    let flowerType = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0

    switch (flowerType) {
        case 'Roses':
            if (quantity <= 80) {
                price = quantity * 5;
            } else {
                price = quantity * 0.9 * 5;
            }
            break;
        case 'Dahlias': 
        if(quantity<=90){
            price=quantity*3.80;
        }else{
            price=quantity*3.80*0.85;
        }
        break;
        case 'Tulips':
        if(quantity<=80){
            price=quantity*2.80;
        }else{
            price=quantity*2.80*0.85;
        }
        break;
        case 'Narcissus':
        if(quantity>=120){
            price=quantity*3;           
        }else{
            price=quantity*3*1.15;
        }
        break;
        case 'Gladiolus':
            if(quantity>=80){
                price=quantity*2.50;
            }else{
                price=quantity*2.50*1.2;
            }
        break;
        default:
            console.log('error');
    }

    let diff = budget - price
    
    if (diff >= 0) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${diff.toFixed(2)} leva left.`)

    }else{
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`)
    }
}
newHouse(["Roses",
"55",
"250"])



