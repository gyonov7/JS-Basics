function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let relaxType = 0
    let costs = 0
    if (budget <= 100) {
        destination = 'Bulgaria'
        switch (season) {
            case 'summer':
                relaxType = 'Camp'
                costs = budget * 0.3
                break;
            case 'winter':
                relaxType = 'Hotel'
                costs = budget * 0.7
                break;
            default:
                console.log('error');
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        switch (season) {
            case 'summer':
                relaxType = 'Camp'
                costs = budget * 0.4
                break;
            case 'winter':
                relaxType = 'Hotel'
                costs = budget * 0.8
                break;
            default:
                console.log('error');
        }
    } else {
        destination = 'Europe'
        relaxType ='Hotel'
        costs = budget * 0.9
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${relaxType} - ${costs.toFixed(2)}`);
}
journey(["1500", "summer"])