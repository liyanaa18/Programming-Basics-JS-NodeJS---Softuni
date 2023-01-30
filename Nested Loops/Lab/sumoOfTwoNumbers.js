function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let counter = 0;
    let flag = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            let result = i + j;
            counter++;

            if (result == magicNum) {
                flag = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                break;
            }
        }

        if (flag) {
            break;
        }
    }

    if (!flag) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["23",

"24",

"20"])