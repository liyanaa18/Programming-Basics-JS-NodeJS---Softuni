function workout(input) {
    let workoutDays = Number(input[0]);
    let kilometersForFirstDay = Number(input[1]);

    let index = 2;
    let totalKilometers = kilometersForFirstDay;
    let kilometersForDay = kilometersForFirstDay;

    for (let i = index; i <= workoutDays + 1; i++) {
        let percentDailyNorm = Number(input[index]);
        kilometersForDay = kilometersForDay * (100 + percentDailyNorm) / 100;
        totalKilometers += kilometersForDay;
        index++;
    }

    if (totalKilometers >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKilometers - 1000)} more kilometers!`);
    }
    else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKilometers)} more kilometers`);
    }
}
workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])
