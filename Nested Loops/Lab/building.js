function buildings(input) {
    let apartament = Number(input[0]);
    let office = Number(input[1]);

    for (let i = apartament; i >= 1; i--) {
        let printLine = "";

        for (let j = 0; j < office; j++) {
            if (i == apartament) {
                printLine += `L${i}${j} `;
            }
            else if (i % 2 == 0) {
                printLine += `O${i}${j} `;
            }
            else {
                printLine += `A${i}${j} `;
            }
        }

        console.log(printLine);
    }
}
buildings(["6",

"4"])