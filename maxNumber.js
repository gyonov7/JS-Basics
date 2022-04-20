function maxNumber(input) {
    
    let num = input[0];
    let index = 1;

    let numMin = Number.MIN_SAFE_INTEGER;


    while (num !== 'Stop') {
        let x = Number(num)
        if(x > numMin){
           numMin = x;
        }

        num = input[index];
        index++;
        
    }
    console.log(numMin);
}
maxNumber (["100",
"99",
"80",
"70",
"Stop"])
