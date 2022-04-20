function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let soldTicketsTotal = 0;
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let soldPerFilm = 0;

    while (command !== "Finish") {
        let movie = command;
        let capacity = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        soldTickets = 0;
        while (ticketType !== 'End') {
            soldTicketsTotal++;
            soldPerFilm++;
            switch (ticketType) {
                case 'student':
                    studentTicket++;
                    capacity--;
                    break;
                case 'standard':
                    standardTicket++;
                    capacity--;
                    break;
                case 'kid':
                    kidTicket++;
                    capacity--;
                    break;
            }
            if (capacity <= 0) {
                break;
            }

            ticketType = input[index];
            index++;
        }
        
        command = input[index];
        index++;
        capacityNow = soldPerFilm + capacity;
        ticketRate = soldPerFilm/capacityNow*100;
        console.log(`${movie} - ${ticketRate.toFixed(2)}% full.`);
        
        soldPerFilm = 0;
    }

    let studentRate = studentTicket / soldTicketsTotal * 100;
    let standardRate = standardTicket / soldTicketsTotal * 100;
    let kidRate = kidTicket / soldTicketsTotal * 100;

    console.log(`Total tickets: ${soldTicketsTotal}`);
    console.log(`${studentRate.toFixed(2)}% student tickets.`);
    console.log(`${standardRate.toFixed(2)}% standard tickets.`);
    console.log(`${kidRate.toFixed(2)}% kids tickets.`);


}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

