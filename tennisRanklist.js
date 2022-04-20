function tennisRanklist(input) {
    let index = 0;
    let tours = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
let sumPoints = 0;
let points = 0;
let win = 0;
    for (let i = index; i <= tours+1; i++) {
        let x = input[index];
        index++;
        
        if (x === 'W') {
            points += 2000;
            win++;
        } else if (x === 'F') {
            points += 1200;
        } else if (x === 'SF') {
            points += 720;
        }
        
        
    }
   sumPoints = startPoints+points;
  avPoints = Math.floor(points/tours);
winTours = win/tours*100;
  
console.log(`Final points: ${sumPoints}`);
console.log(`Average points: ${avPoints}`);
console.log(`${winTours.toFixed(2)}%`);

}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])

