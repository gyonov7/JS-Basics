function repainting (input) {
let nailon = Number (input[0]);
let color = Number(input[1]);
let razreditel = Number(input[2]);
let hours = Number (input[3]);

let addoncolorSum = (color + color*0.1) * 14.50
let addonNailonSum = (nailon + 2) * 1.50
let torbichka = 0.40
let razreditelSum = razreditel * 5
let sumMaterials = razreditelSum + addoncolorSum + addonNailonSum + torbichka
let service = (sumMaterials * 0.3) * hours

let expenses = sumMaterials + service

console.log(expenses)

}

repainting([10,11,4,8])