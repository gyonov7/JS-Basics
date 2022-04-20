function uniqueTest(input) {
    let num1 = Number(input[0]);

    let isPrime = true;

    for (let a = 1; a <= num1; a++) {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                isPrime = false;
                continue;
            }
            if(isPrime){
                console.log(a);
            }
        
        }
        
    }
   
}
uniqueTest([5])