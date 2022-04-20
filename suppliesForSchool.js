function suppliesForSchool (input) {

let pensPack = Number (input[0]);
let markerPack = Number(input[1]);
let litersDashboard = Number (input[2]);
let discount = Number (input[3]) / 100 ;

let sumPens = pensPack * 5.80
let sumMarkers = markerPack * 7.20
let sumDashboard = litersDashboard * 1.20

let sumcons = sumPens + sumMarkers + sumDashboard

let finalcalc = sumcons - sumcons * discount

console.log(finalcalc)

}

suppliesForSchool([2,3,4,25])