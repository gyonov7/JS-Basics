function trainingLab(input){

    let w = Number(input[0]);
    let h = Number(input[1]);

    let withoutKoridor = h*100-100;
    let widhtDesk = 70
let widhtRow = 120
    let deskRow = Math.floor(withoutKoridor/widhtDesk);

    let deskWidht =Math.floor(w*100/120)

let result = deskRow*deskWidht

console.log(result-3);
}

trainingLab(['15','8.9'])