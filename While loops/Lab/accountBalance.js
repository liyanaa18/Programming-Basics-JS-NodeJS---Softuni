function accountBalance(input) {
    let index = 0;
    let total = 0;

    while (input[index] != "NoMoreMoney") {
        let balance = Number(input[index]);

        if (balance < 0) {
            console.log('Invalid operation!');
            console.log(`Total: ${total.toFixed(2)}`);
            break;
        }
        else {
            console.log(`Increase: ${balance.toFixed(2)}`);
            total += balance;
        }
        index++;
    }

    if (input[index] == 'NoMoreMoney') {
        console.log(`Total: ${total.toFixed(2)}`);
    }

}
accountBalance(["120", "45.55", "-150"]);