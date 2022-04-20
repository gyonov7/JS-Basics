function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let ocenka = input[2];

    let nights = days - 1;
    let sum = 0;
    switch (type) {
        case 'room for one person':
            if (days < 10) {
                sum = nights * 18.00
            } else if (days >= 10 && days <= 15) {
                sum = nights * 18.00
            } else {
                sum = nights * 18.00
            }
            break;
        case 'apartment':
            if (days < 10) {
                sum = nights * 25.00*0.70
            } else if (days >= 10 && days <= 15) {
                sum = nights * 25.00*0.65
            } else {
                sum = nights * 25.00*0.5
            }
        break;
        case 'president apartment':
            if (days < 10) {
                sum = nights * 35.00*0.9
            } else if (days >= 10 && days <= 15) {
                sum = nights * 35.00*0.85
            } else {
                sum = nights * 35.00*0.8
            }    
        break;

        default:
            console.log('error');
    }
    if(ocenka==='positive'){
        sum = sum*1.25
    }else{
        sum = sum*0.9
    }

console.log(sum.toFixed(2));
}
skiTrip(["30",
"president apartment",
"negative"])


