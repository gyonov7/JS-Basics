function numbersDivisibleBy9(input) {
    let index = 0;
    let n1 = Number(input[index]);
    index++;
    let n2 = Number(input[index]);
    index++;
    let sum = 0;
let outPutNumbers = ''
    for (i = n1; i < n2; i++) {
        if (i % 9 === 0) {
            sum+=i;
            outPutNumbers+=`${i}\n`
        }
    
    }   
console.log(`The sum: ${sum}`);
console.log(outPutNumbers);
    
}
numbersDivisibleBy9(['100', '200'])