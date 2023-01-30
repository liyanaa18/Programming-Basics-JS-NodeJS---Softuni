function minNumber(input) {
    let index = 0;

    let minNum = Number(input[index]);

    while (input[index] != 'Stop') {
        let nextNum = Number(input[index + 1]);
        if (minNum > nextNum) {
            minNum = nextNum;
        }
        index++;
    }

    console.log(minNum);
}
minNumber(["-1", "-2", "Stop"])