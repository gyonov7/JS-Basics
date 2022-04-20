function barcodeGenerator(input) {
    let num1 = input[0];
    let num2 = input[1];
    let result = '';

    for (let a = num1[0]; a <= num2[0]; a++) {
        for (let b = num1[1]; b <= num2[1]; b++) {
            for (let c = num1[2]; c <= num2[2]; c++) {
                for (let d = num1[3]; d <= num2[3]; d++) {
                    if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0 || d % 2 === 0) {
                        continue;
                    }
                    result += ''+ a + b + c + d + ' ';
                    
                    // result = ''; 
                }
            }
        }
    }
    console.log(result);
}
barcodeGenerator(["2345",
    "6789"])
