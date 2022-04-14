// check basketball function 
function basketball(input){
let training = Number(input[0]);

let suit = training * 0.2; 
let ball = suit * 0.25;

let result = 'Basketball is ' + (training + suit + ball);

console.log(result);

}
basketball([10])

// check volleyball function 
function volleyball(input){
    let training = Number(input[0]);
    
    let suit = training * 0.2; 
    let ball = suit * 0.25;
    
    let result = 'Volleyball is ' + (training + suit + ball);
    
    console.log(result);
    
    }
    volleyball([15])

