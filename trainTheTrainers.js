function trainTheTrainers(input) {
    let index = 0;
    let judge = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sumGrade = 0;
    let smGrade = 0;
    let totalSumGrade = 0;
    let counter = 0;
    let counterExam = 0;
    while (command !== 'Finish') {
        let name = command;
        counter++;
        for (let i = 1; i <= judge; i++) {

            counterExam++;
            let grade = Number(input[index]);
            index++;

            sumGrade += grade;
            smGrade += grade;

        }

        let avGrade = smGrade / counterExam;
        console.log(`${name} - ${avGrade.toFixed(2)}.`);

        totalSumGrade += avGrade;
        counterExam = 0;
        smGrade = 0;
        command = input[index];
        index++;
    }
    totalSumGrade /= counter;
    console.log(`Student's final assessment is ${totalSumGrade.toFixed(2)}.`);
}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])

