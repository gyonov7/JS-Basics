function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let tip = 0;
    
    for (i = index; i <= openTabs+1; i++) {
        let x = input[i];

        if (x === 'Facebook') {
            tip += 150;
        } else if (x === 'Instagram') {
            tip += 100;
        } else if (x === 'Reddit') {
            tip += 50;
            
        }
       
    }
   
    let diff = money - tip;

    if(diff<=0){
        console.log(`You have lost your salary.`);
    }else{
        console.log(`${diff}`);
    }
   

}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

