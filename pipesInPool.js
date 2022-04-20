function pipesInPool(input){
let v = Number(input[0]);
let p1 = Number(input[1]);
let p2 = Number(input[2]);
let h = Number(input[3]);

let p1DoneInLiters = p1 * h
let p2DoneInLiters = p2 * h
 let pipesTotal = p1DoneInLiters + p2DoneInLiters
let quote = pipesTotal/v*100

let quotePOne = p1DoneInLiters/pipesTotal*100
let quotePTwo = p2DoneInLiters/pipesTotal*100
let plusLiters = Math.abs(pipesTotal - v)
 if(v>=pipesTotal){
console.log(`The pool is ${quote}% full. Pipe 1: ${quotePOne.toFixed(2)}%. Pipe 2: ${quotePTwo.toFixed(2)}%.`);
 }else{
     console.log(`For ${h} hours the pool overflows with ${plusLiters} liters.`);
 }

}

pipesInPool(['1000','100','120','3'])