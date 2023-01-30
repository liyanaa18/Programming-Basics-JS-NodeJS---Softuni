function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startPoints = Number(input[1]);

    let finalPoints = startPoints;
    let winsCount = 0;

    for (let i = 2; i < input.length; i++) {
        let stage = input[i];

        switch (stage) {
            case 'F':
                finalPoints += 1200;
                break;
            case 'SF':
                finalPoints += 720;
                break;
            case 'W':
                finalPoints += 2000;
                winsCount++;
                break;
        }
    }

    let averagePoints = (finalPoints - startPoints) / tournamentsCount;
    let percentWins = (winsCount / tournamentsCount) * 100;

    console.log(`Final points: ${Math.floor(finalPoints)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWins.toFixed(2)}%`);
}
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])