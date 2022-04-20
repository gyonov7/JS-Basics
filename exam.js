function exam (input){
    let studentsNum = Number(input[0]);
    let totalSumGrades = 0;
    let overFiveCounter = 0;
    let overFourCounter = 0;
    let overThreeCounter = 0;
    let betweenTwoAndThree = 0; 
    for (let index = 1; index < input.length; index++){
        let grade = Number(input[index]);
        totalSumGrades+=grade;
        
        if(grade >= 5){
            overFiveCounter++;
        }else if(grade >= 4){
            overFourCounter++;
        }else if(grade >=3){
            overThreeCounter++;

        }else if(grade < 3){
            betweenTwoAndThree++;
        }
    }
    console.log(`Top students: ${(overFiveCounter/studentsNum*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(overFourCounter/studentsNum*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(overThreeCounter/studentsNum*100).toFixed(2)}%`);
    console.log(`Fail: ${(betweenTwoAndThree/studentsNum*100).toFixed(2)}%`);

    console.log(`Average: ${(totalSumGrades/studentsNum).toFixed(2)}`);

}
exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
