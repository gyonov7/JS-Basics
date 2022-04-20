function evenOrOdd(input) {
    let num1 = Number(input[0]);
    let result = num1 % 2
    if (result === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}
evenOrOdd(['4'])