function basketballEquipment (input) {

    let anualtax = Number(input[0]);

    let snickers = anualtax - (anualtax*0.4);
    let suit = snickers - (snickers*0.2);
    let ball = suit/4;
    let acc = ball/5;

    let result = anualtax + snickers + suit + ball + acc ;

    console.log(result);
}

basketballEquipment([365])