function travelling(input) {

    let index = 0;
    let command = input[index];
    index++;

    while (command != 'End') {
        let destination = command;
        let budget = Number(input[index]);
        index++;

        let currentMoney = 0;

        while (budget > currentMoney) {
            currentMoney += Number(input[index]);
            index++;
        }

        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
    }
}
travelling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);