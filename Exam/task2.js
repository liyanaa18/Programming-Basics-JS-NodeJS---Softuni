function deerOfSanta(input) {
    let daysCounter = Number(input[0]);
    let food = Number(input[1]);
    let foodForFirstDeer = Number(input[2]);
    let foodForSecondDeer = Number(input[3]);
    let foodForThirdDeer = Number(input[4]);

    let foodNeedForFirstDeer = daysCounter * foodForFirstDeer;
    let foodNeedForSecondDeer = daysCounter * foodForSecondDeer;
    let foodNeedForThirdDeer = daysCounter * foodForThirdDeer;

    let needFood = foodNeedForFirstDeer + foodNeedForSecondDeer + foodNeedForThirdDeer;

    if (needFood <= food) {
        console.log(`${Math.floor(food - needFood)} kilos of food left.`);
    }
    else {
        console.log(`${Math.ceil(needFood - food)} more kilos of food are needed.`);
    }
}
deerOfSanta(["2",
    "10",
    "1",
    "1",
    "2"])