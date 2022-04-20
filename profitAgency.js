function profitAgency (input){

    let nameAvio = input[0];
    let adultTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let service = Number(input[4]);

    let kidsTicketPrice = adultTicketPrice*0.3;

    let servicePrice = adultTickets*service +
     kidsTickets*service;

let allTicketsPrice = adultTicketPrice*adultTickets + 
kidsTickets*kidsTicketPrice + servicePrice;

let profit = allTicketsPrice*0.2;

console.log(`The profit of your agency from ${nameAvio} tickets is ${profit.toFixed(2)} lv.`);
}

profitAgency(["Ryanair",
"60",
"23",
"158.96",
"39.12"])

