function hotelRoom(input) {
    let month = input[0];
    let overnightStayCount = Number(input[1]);

    let studioPrice = 0;
    let apartamentPrice = 0;

    if (month == 'May' || month == 'October') {
        studioPrice = overnightStayCount * 50;
        apartamentPrice = overnightStayCount * 65;

        if (overnightStayCount > 7 && overnightStayCount <= 14) {
            studioPrice = studioPrice * 0.95;
        }
        else if (overnightStayCount > 14) {
            studioPrice = studioPrice * 0.70;
        }
    }
    else if (month == 'June' || month == 'September') {
        studioPrice = overnightStayCount * 75.20;
        apartamentPrice = overnightStayCount * 68.70;

        if (overnightStayCount > 14) {
            studioPrice = studioPrice * 0.80;
        }
    }
    else if (month == 'July' || month == 'August') {
        studioPrice = overnightStayCount * 76;
        apartamentPrice = overnightStayCount * 77;
    }
    switch (month) {
        case 'May':
        case 'June':
        case 'July':
        case 'August':
        case 'September':
        case 'October':
            if (overnightStayCount > 14) {
                apartamentPrice = apartamentPrice * 0.90;
            }
            break;
    }
    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"])