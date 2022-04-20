function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;
    let bestPlayer = '';
    let best = 0;
    let score = 0;
    let counter = 0;

    while (command !== 'END') {
        if (counter >= input.length) {
            break;
        }
        let name = command;
        score = Number(input[index]);
        index++;


        if (score > best) {
            best = score;
            bestPlayer = name;
        }
        

        

        counter += 2;
        command = input[index];
        index++;

    }
    console.log(`${bestPlayer} is the best player!`);

    if (score >= 3) {
        console.log(`He has scored ${best} goals and made a hat-trick !!!`);

    } else {
        console.log(`He has scored ${score} goals.`);
    }
}

bestPlayer(["Silva",
    "5",
    "Harry Kane",
    "10"])


