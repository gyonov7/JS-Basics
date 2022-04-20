function vacationBooksList (input) {
let sheets = Number(input[0]);
let sheetPerHour = Number (input[1]);
let days = Number (input[2]);

let hoursperBook = sheets / sheetPerHour
let hoursNeeded = hoursperBook / days

console.log(hoursNeeded)

}

vacationBooksList([212,20,2])