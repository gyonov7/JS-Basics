function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let judges = Number(input[index]);
    index++;


    let points = 0;
    let x = '';
let sum = 0;
    for (i = 0; i < judges; i++) {
        let judgeName = input[index];
        index++;
        let judgePoints = Number(input[index]);
        index++;
        academyPoints+=judgeName.length*judgePoints/2;
        if(academyPoints>1250.5){
            break;
        }
    }
    
    let diff = Math.abs(academyPoints-1250.5)
   if (academyPoints >= 1250.5){
    console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);

   }else{
      console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);

   }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])



