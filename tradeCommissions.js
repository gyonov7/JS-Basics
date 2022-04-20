function tradeCommissions(input) {
    let town = input[0];
    let volume = Number(input[1]);
    let result = 0

    switch (town) {
        case 'Sofia':
            if (volume < 0) {
                console.log('error');break;
            } else if (volume <= 500){
                result = volume * 0.05;
            }else if (volume <= 1000) {
        result = volume * 0.07;
             } else if (volume <= 10000) {
        result = volume * 0.08;
            } else if (volume > 10000) {
        result = volume * 0.12;
            } 
            console.log(result.toFixed(2));
    break;
        case 'Varna':
            if (volume < 0) {
                console.log('error');break;
            } else if (volume <= 500){
                result = volume * 0.045;
            }else if (volume <= 1000) {
        result = volume * 0.075;
             } else if (volume <= 10000) {
        result = volume * 0.1;
            } else if (volume > 10000) {
        result = volume * 0.13;
            } 
            console.log(result.toFixed(2));
    break;
        case 'Plovdiv':
            if (volume < 0) {
                console.log('error');break;
            } else if (volume <= 500){
                result = volume * 0.055;
            }else if (volume <= 1000) {
        result = volume * 0.08;
             } else if (volume <= 10000) {
        result = volume * 0.12;
            } else if (volume > 10000) {
        result = volume * 0.145;
            } 
            console.log(result.toFixed(2));    
        break;
        default:
    console.log('error');
}

}
tradeCommissions(["Varna",
"-50"])
