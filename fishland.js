function fishland(input) {

    let skumriqPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

let palamudPrice = skumriqPrice*1.6
let palamudAll = palamudPrice*palamudKg

let safridPrice = cacaPrice*1.8
let safridAll = safridKg*safridPrice

let midiAll = midiKg*7.50

let bill = palamudAll + safridAll + midiAll

console.log(bill.toFixed(2));
}

fishland(['6.9','4.20','1.5','2.5','1']);
fishland(['5.55','3.57','4.3','3.6','7']);
fishland(['7.79','5.35','9.3','0','0'])