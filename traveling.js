function traveling(input) {
    let command = input[0];
    let index = 1;

    while (command !== 'End') {
        let destionation = command;
        let toCollect = 0;
        let needMoney = Number(input[index]);
        index++;
        while (toCollect <= needMoney) {
            let cash = Number(input[index]);
            toCollect += cash;
            index++;
            if (toCollect >= needMoney) {
                console.log(`Going to ${destionation}!`);
                break;  
            }
        }
        command = input[index];
        index++;
    }

}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])

