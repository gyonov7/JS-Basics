function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = input[2];
    let price = 0

    switch (town) {
        case 'Sofia':
            switch (product) {
                case 'coffee': console.log(quantity * 0.5); break;
                case 'water': console.log(quantity * 0.8); break;
                case 'beer': console.log(quantity * 1.20); break;
                case 'sweets': console.log(quantity * 1.45); break;
                case 'peanuts': console.log(quantity * 1.60); break;
                default: console.log('Error'); break;
            }
            ; break;

        case 'Plovdiv':
            switch (product) {
                case 'coffee': console.log(quantity * 0.4); break;
                case 'water': console.log(quantity * 0.7); break;
                case 'beer': console.log(quantity * 1.15); break;
                case 'sweets': console.log(quantity * 1.30); break;
                case 'peanuts': console.log(quantity * 1.50); break;
                default: console.log('Error'); break;
            }
            ; break;

        case 'Varna': 
        switch (product) {
            case 'coffee': console.log(quantity * 0.45); break;
            case 'water': console.log(quantity * 0.7); break;
            case 'beer': console.log(quantity * 1.10); break;
            case 'sweets': console.log(quantity * 1.35); break;
            case 'peanuts': console.log(quantity * 1.55); break;
            default: console.log('Error'); break;
        }
        ; break;


        default:
            console.log('Error');
            break;
    }
}

smallShop(['beer', 'Varna', '5'])