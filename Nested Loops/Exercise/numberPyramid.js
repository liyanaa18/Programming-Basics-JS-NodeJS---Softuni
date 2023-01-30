function numberPyramid(input) {
    let num = Number(input[0]);
    let counter = 1;
    let isBigger = false;
    let currentLine = "";

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            if (counter > num) {
                isBigger = true;
                break;
            }
            currentLine += counter + " ";
            counter++;
        }

        console.log(currentLine);
        currentLine = "";

        if (isBigger) {
            break;
        }
    }
}
numberPyramid(["7"])