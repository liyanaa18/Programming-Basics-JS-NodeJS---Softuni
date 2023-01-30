function cleverLily(input) {
    let lilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCount = 0;
    let money = 0;
    let base = 10;

    let brothersLilyMoney = 0;

    for (let i = 1; i <= lilisAge; i++) {
        if (i % 2 != 0) {
            toysCount++;
        }
        else {
            money += base;
            base += 10;
            brothersLilyMoney++;
        }
    }

    let totalToysPrice = toyPrice * toysCount;
    let allMoney = totalToysPrice + money - brothersLilyMoney;

    if (allMoney >= washingMachinePrice) {
        console.log(`Yes! ${(allMoney - washingMachinePrice).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(washingMachinePrice - allMoney).toFixed(2)}`);
    }
}
cleverLily(["10",

    "170.00",

    "6"])