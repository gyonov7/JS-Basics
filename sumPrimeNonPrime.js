function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let primeSum = 0;
    let NonPrimeSum = 0;
    while (command !== 'stop') {
        let num = Number(command);
        if (num < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        isPrime = true;
        for (let j = 2; j <= num -1 ; j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSum += num;
        } else {
            NonPrimeSum += num;
        }


        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${NonPrimeSum}`);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])



