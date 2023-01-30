function cinemaTickets(input) {

     
    let index = 0;
    let command = input[index];
    let studentCounter = 0;
    let standartCounter = 0;
    let kidCounter = 0;
    let totalTickets = 0;
    
    while (command !== 'Finish') {
        let name = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;
 
        let ticketType = input[index];
        let ticketCounter = 0;
 
        while (ticketType !== 'End') {
            ticketCounter++;
 
            switch (ticketType) {
                case "standard": standartCounter++; break;
                case "student": studentCounter++; break;
                case "kid": kidCounter++; break;
            }
            if (ticketCounter >= freeSeats) {
                break;
            }
            index++;
            ticketType = input[index];
        }
        totalTickets += ticketCounter;
 
        let result = ticketCounter / freeSeats * 100;
 
        console.log(`${name} - ${result.toFixed(2)}% full.`);
        index++;
        command = input[index];
    }
 
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentCounter / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartCounter / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);