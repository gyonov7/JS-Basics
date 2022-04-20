function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay === 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers'
        } else if (timeOfDay === 'Afternoon' || timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (degrees <= 24) {
        if (timeOfDay === 'Morning' || timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins'
        } else {
            outfit = 'T-Shirt';
            shoes = 'Sandals'
        }
    } else {
        switch (timeOfDay) {
            case 'Morning':
            outfit='T-Shirt';
            shoes='Sandals'    
            break;
            case 'Afternoon':
            outfit='Swim Suit';
            shoes='Barefoot';    
            break;
            case 'Evening':
            outfit='Shirt';
            shoes='Moccasins';    
            break;
            default:
                console.log('error');
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["-28",
"Evening"])

