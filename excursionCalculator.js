function excursionCalculator(input) {
    let persons = Number(input[0]);
    let season = input[1];
    let totalSum = 0;

    if (persons <= 5) {
        switch(season){
            case 'spring':
            totalSum = persons * 50;    
            break;
            case 'summer':
            totalSum = persons * 48.50 * 0.85    
            break;
            case 'autumn': 
            totalSum = persons * 60;
            break;
            case 'winter':
            totalSum = persons * 86 * 1.08;    
            break;

        }
    } else if (persons > 5) {
        switch(season){
            case 'spring':
            totalSum = persons * 48;    
            break;
            case 'summer':
            totalSum = persons * 45 * 0.85    
            break;
            case 'autumn': 
            totalSum = persons * 49.5;
            break;
            case 'winter':
            totalSum = persons * 85 * 1.08;    
            break;

        }
    }
console.log(`${totalSum.toFixed(2)} leva.`);
}
excursionCalculator(["10",
"summer"])


