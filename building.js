function building(input) {
    let etage = Number(input[0]);
    let rooms = Number(input[1]);
    
    let lastEtage = 0;
    for (let i = etage; i >= 1; i--) {
        let result = ''
        lastEtage++;
        for (let j = 0; j < rooms; j++) {
            etageNum = ''
            if (lastEtage === 1) {
                etageNum = 'L' + `${i}${j} `;
            } else if (i % 2 === 0) {
                etageNum = 'O'+ `${i}${j} `;
            } else {
                etageNum = 'A'+ `${i}${j} `;
            }
            result += etageNum
            
        }
        console.log(result);
    }

}



building(["4", "4"])