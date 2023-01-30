function vacation(input) {
    let tripMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let days = 0;
    let spendDays = 0;

    let index = 2;
    let currentInput = input[index];

    while (availableMoney < tripMoney) {
        days++;
        index++;

        if (currentInput == 'spend') {
            spendDays++;

            if (spendDays == 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }

            let spendMoney = Number(input[index]);
            availableMoney -= spendMoney;

            if (availableMoney < 0) {
                availableMoney = 0;
            }
        }
        else if (currentInput == 'save') {
            spendDays = 0;
            let moneySave = Number(input[index]);
            availableMoney += moneySave;
        }

        index++;
        currentInput = input[index];
    }

    if (availableMoney >= tripMoney) {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"]);