function balls(input) {
    let n = Number(input[0]);
    let points = 0;
    let index = 1;
    let color = input[index];
    index++;
    let redBall = 0;
    let orangeBall = 0;
    let yellowBall = 0;
    let whiteBall = 0;
    let blackBall = 0;
    let other = 0;

    for (let i = 0; i < n; i++) {

        switch (color) {
            case 'red':
                redBall++;
            points+=5;    
            break;
            case 'orange': 
            orangeBall++;
            points+=10;
            break;
            case 'yellow':
                yellowBall++;
            points+=15;    
            break;
            case 'white':
                whiteBall++;
            points+=20;    
            break;
            case 'black':
                blackBall++;
            points = Math.floor(points/2)  ;  
            break;
            default:
                other++;
                break;
        }
        
        color = input[index];
        index++;

    }

    console.log(`Total points: ${points}`);
    console.log(`Points from red balls: ${redBall}`);
    console.log(`Points from orange balls: ${orangeBall}`);
    console.log(`Points from yellow balls: ${yellowBall}`);
    console.log(`Points from white balls: ${whiteBall}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${blackBall}`);


}
balls([10,'white','white','ee','red','orange','red','black','black','black','black'])


