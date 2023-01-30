function excursionCalculator(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];

    let total = 0;

    if (season == 'spring') {
        if (peopleCount <= 5) {
            total = peopleCount * 50;
        }
        else {
            total = peopleCount * 48;
        }
    }
    else if (season == 'autumn') {
        if (peopleCount <= 5) {
            total = peopleCount * 60;
        }
        else {
            total = peopleCount * 49.50;
        }
    }
    else if (season == 'winter') {
        if (peopleCount <= 5) {
            total = peopleCount * 86;
        }
        else {
            total = peopleCount * 85;
        }

        total = (total * 108) / 100;
    }
    else if (season == 'summer') {
        if (peopleCount <= 5) {
            total = peopleCount * 48.50;
        }
        else {
            total = peopleCount * 45;
        }

        total = (total * 85) / 100;
    }

    console.log(`${total.toFixed(2)} leva.`);

}
excursionCalculator(["20",
    "winter"])

