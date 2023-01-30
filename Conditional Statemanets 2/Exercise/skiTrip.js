function skiTrip(input) {
    let daysToStay = Number(input[0]);
    let typeRoom = input[1];
    let rating = input[2];

    let total = 0;

    if ((daysToStay - 1) < 10) {
        if (typeRoom == 'room for one person') {
            total = (daysToStay - 1) * 18;
        }
        else if (typeRoom == 'apartment') {
            total = (daysToStay - 1) * 25;
            total = total * 0.65;
        }
        else if (typeRoom == 'president apartment') {
            total = (daysToStay - 1) * 35;
            total = total * 0.85;
        }
    }
    else if ((daysToStay - 1) >= 10 && (daysToStay - 1) <= 15) {
        if (typeRoom == 'room for one person') {
            total = (daysToStay - 1) * 18;
        }
        else if (typeRoom == 'apartment') {
            total = (daysToStay - 1) * 25;
            total = total * 0.65;
        }
        else if (typeRoom == 'president apartment') {
            total = (daysToStay - 1) * 35;
            total = total * 0.90;
        }
    }
    else {
        if (typeRoom == 'room for one person') {
            total = (daysToStay - 1) * 18;
        }
        else if (typeRoom == 'apartment') {
            total = (daysToStay - 1) * 25;
            total = total * 0.50;
        }
        else if (typeRoom == 'president apartment') {
            total = (daysToStay - 1) * 35;
            total = total * 0.80;
        }
    }

    if (rating == 'positive') {
        total = total * 1.25;
    }
    else if (rating == 'negative') {
        total = total * 0.90;
    }

    console.log(total.toFixed(2));
}

skiTrip(["30",

"president apartment",

"negative"])