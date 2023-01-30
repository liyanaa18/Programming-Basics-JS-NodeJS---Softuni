function trekkingMania(input) {
    let groupCount = Number(input[0]);

    let groupMusala = 0;
    let groupMonblan = 0;
    let groupKilimandzharo = 0;
    let groupK2 = 0;
    let groupEverest = 0;
    let totalPeople = 0;

    for (let i = 1; i < input.length; i++) {
        let peopleInGroupCount = Number(input[i]);
        totalPeople += peopleInGroupCount;

        if (peopleInGroupCount <= 5) {
            groupMusala += peopleInGroupCount;
        }
        else if (peopleInGroupCount <= 12) {
            groupMonblan += peopleInGroupCount;
        }
        else if (peopleInGroupCount <= 25) {
            groupKilimandzharo += peopleInGroupCount;
        }
        else if (peopleInGroupCount <= 40) {
            groupK2 += peopleInGroupCount;
        }
        else {
            groupEverest += peopleInGroupCount;
        }
    }

    console.log(`${((groupMusala / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((groupMonblan / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((groupKilimandzharo / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((groupK2 / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((groupEverest / totalPeople) * 100).toFixed(2)}%`);
}
trekkingMania(["10",

    "10",

    "5",

    "1",

    "100",

    "12",
    "26", "17", "37", "40", "78"])