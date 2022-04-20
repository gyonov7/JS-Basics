function combinations(input) {

    let sum = Number(input[0]);
    let counter = 0;

    for (let i = 0; i <= 25; i++) {
        for (let j = 0; j <= 25; j++) {
            for (let x = 0; x <= 25; x++) {
                
                if (i + j + x === sum) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
combinations(['20'])