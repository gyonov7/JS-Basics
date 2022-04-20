function examPreparation(input) {

    let badGrades = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let sumGrades = 0;
    let numExams = 0;
    let lastProblem = '';
    let fail = 0;
let isSuccess = true;

    while (command !== 'Enough') {
        let name = command;
        let rate = Number(input[index]);
        index++;
        sumGrades += rate;
        numExams++;
        lastProblem = name;
        if (rate <= 4) {
            fail++;
        }
        if(fail === badGrades){
            console.log(`You need a break, ${fail} poor grades.`);
            isSuccess = false;
            break;
        }

        command = input[index];
        index++;
    }
let avSc = sumGrades/numExams;
if(isSuccess){
    console.log(`Average score: ${avSc.toFixed(2)}`);
    console.log(`Number of problems: ${numExams}`);
    console.log(`Last problem: ${lastProblem}`);
}
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
