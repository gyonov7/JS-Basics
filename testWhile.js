function testWhile(input) {
    let index = 0;
    let num = Number(input[index])
    let sum = 0;


    while (sum < 2) {
        sum += num;
        console.log(sum);
        index++;
    }

}
testWhile(['1', '2', '3'])