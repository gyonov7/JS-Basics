function fruitShop(input) {
    let product = input[0];
    let weekDay = input[1];
    let quantity = Number(input[2]);
    let price = 0

    switch (weekDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (product) {
                case 'banana': console.log(((quantity * 2.50)).toFixed(2)); break;
                case 'apple': console.log((quantity * 1.20).toFixed(2)); break;
                case 'orange': console.log((quantity * 0.85).toFixed(2)); break;
                case 'grapefruit': console.log((quantity * 1.45).toFixed(2)); break;
                case 'kiwi': console.log((quantity * 2.70).toFixed(2)); break;
                case 'pineapple': console.log((quantity * 5.50).toFixed(2)); break;
                case 'grapes': console.log((quantity * 3.85).toFixed(2)); break;
                default:
                    console.log("error");
            }
            ; break;
        case 'Saturday':
        case 'Sunday':
            switch (product) {
                case 'banana': console.log((quantity * 2.70).toFixed(2)); break;
                case 'apple': console.log((quantity * 1.25).toFixed(2)); break;
                case 'orange': console.log((quantity * 0.9).toFixed(2)); break;
                case 'grapefruit': console.log((quantity * 1.6).toFixed(2)); break;
                case 'kiwi': console.log((quantity * 3.00).toFixed(2)); break;
                case 'pineapple': console.log((quantity * 5.6).toFixed(2)); break;
                case 'grapes': console.log((quantity * 4.20).toFixed(2)); break;
                default:
                    console.log("error");
            }
            ; break;
            default: 
            console.log('error');


    }
}

fruitShop(["apple",
    "ball",
    "2"])
