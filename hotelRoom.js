function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apartment = 0
    let studio = 0

    if (month === 'May' || month === 'October') {
        if (nights > 14) {
            studio = nights * 50 * 0.7
            apartment = nights * 65 * 0.9

        } else if (nights > 7) {
            studio = nights * 50 * 0.95
            apartment = nights * 65
        }else{
            studio=nights*50
            apartment=nights*65
        }
    } else if (month === 'June' || month === 'September') {
        if (nights > 14) {
            studio = nights * 75.20 * 0.8
            apartment = nights * 68.70 * 0.9
        } else {
            studio = nights * 75.20
            apartment = nights * 68.70
        }
    }else if(month==='July'|| month==='August'){
        studio=nights*76
        if(nights>14){
            apartment=nights*77*0.9
        }else{
            apartment=nights*77
        }
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
console.log(`Studio: ${studio.toFixed(2)} lv.`);
}


hotelRoom(["August",
"1"])


