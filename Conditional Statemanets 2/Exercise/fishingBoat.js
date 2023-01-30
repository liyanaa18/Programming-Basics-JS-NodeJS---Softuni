function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishmenCount = Number(input[2]);

    let rentBoat = 0;

    if (season == 'Winter') {
        rentBoat = 2600;
    }
    else if (season == 'Summer' || season == 'Autumn') {
        rentBoat = 4200;
    }
    else if (season == 'Spring') {
        rentBoat = 3000;
    }

    if (fishmenCount <= 6) {
        rentBoat = rentBoat * 0.90;
    }
    else if (fishmenCount > 7 && fishmenCount <= 11) {
        rentBoat = rentBoat * 0.85;
    }
    else {
        rentBoat = rentBoat * 0.75;
    }

    if (fishmenCount % 2 == 0 && season != 'Autumn') {
        rentBoat = rentBoat * 0.95;
    }

    if (rentBoat <= budget) {
        console.log(`Yes! You have ${(budget - rentBoat).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(rentBoat - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["2000", "Winter", "13"])