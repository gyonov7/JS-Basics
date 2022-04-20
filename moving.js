function moving(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let capacity = w * l * h;

    let index = 3;
    let command = input[index];
    index++;
    let isMoreCapacity = true;
    while (command !== 'Done') {
        boxes = Number(command);
        capacity -= boxes;
        if (capacity <= 0) {
            isMoreCapacity = false;
            console.log(`No more free space! You need ${Math.abs(capacity)} Cubic meters more.`);
            break;
        }
command = input[index];
index++;
    }
    if(isMoreCapacity){
        console.log(`${Math.abs(capacity)} Cubic meters left.`);
    }

}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
