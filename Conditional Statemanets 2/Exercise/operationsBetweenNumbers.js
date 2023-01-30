function operationsBetweenNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let operator = input[2];

    if (operator == '+') {
        let sum = firstNumber + secondNumber;
        let tempAdd;

        if (sum % 2 == 0) {
            tempAdd = 'even';
        }
        else {
            tempAdd = 'odd';
        }
        console.log(`${firstNumber} + ${secondNumber} = ${sum} - ${tempAdd}`);
    }
    else if (operator == '-') {
        let diff = firstNumber - secondNumber;
        let tempSubs;

        if (diff % 2 == 0) {
            tempSubs = 'even';
        }
        else {
            tempSubs = 'odd';
        }
        console.log(`${firstNumber} - ${secondNumber} = ${diff} - ${tempSubs}`);

    }
    else if (operator == '*') {
        let multiplication = firstNumber * secondNumber;
        let tempMulti;

        if (multiplication % 2 == 0) {
            tempMulti = 'even';
        }
        else {
            tempMulti = 'odd';
        }
        console.log(`${firstNumber} * ${secondNumber} = ${multiplication} - ${tempMulti}`);

    }
    else if (operator == '/') {
        if (secondNumber == 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        }
        else {
            let division = firstNumber / secondNumber;
            console.log(`${firstNumber} / ${secondNumber} = ${division.toFixed(2)}`);
        }
    }
    else if (operator == '%') {
        if (secondNumber == 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        }
        else {
            let result = firstNumber % secondNumber;
            console.log(`${firstNumber} % ${secondNumber} = ${result}`);
        }
    }
}

operationsBetweenNumbers(["112", "0", "/"])