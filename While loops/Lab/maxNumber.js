function maxNumber(input) {
    let index = 0;

    let maxNum = Number(input[index]);

    while (input[index] != 'Stop') {
        let nextNum = Number(input[index + 1]);
        if (maxNum < nextNum) {
            maxNum = nextNum;
        }
        index++;
    }

    console.log(maxNum);
}
maxNumber(["-1", "-2", "Stop"])