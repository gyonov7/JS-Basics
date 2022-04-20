function uniquePINCodes(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let isPrime = true;
    for (let a = 1; a <= num1; a++) {
        for (let b = 1; b <= num2; b++) {

            if (b === 1 || b === 4 || b === 6 || b === 8 || b===9) {
                continue;
            }

            for (let c = 1; c <= num3; c++) {
                if (a % 2 === 0 && c % 2 === 0) {
                    console.log(`${a} ${b} ${c}`);
                }
            }

        }
    }
}





uniquePINCodes(["6",
    "6",
    "6"])

