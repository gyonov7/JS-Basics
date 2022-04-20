function cake(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    let pieces = w * h;

    let index = 2;
    let command = input[index];
    index++;
let stillPieces = true;

    while (command !== 'STOP') {
        cuts = Number(command);
        pieces -= cuts;

        if (pieces <= 0) {
stillPieces = false; 
            console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
            break;
        }

        command = input[index];
        index++;

    }
    if(stillPieces){
console.log(`${pieces} pieces are left.`);
}

}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])


