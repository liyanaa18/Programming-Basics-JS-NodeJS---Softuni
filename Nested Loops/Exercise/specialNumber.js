function specialNumber(input) {
    let specialNum = Number(input[0]);

    let output = "";

    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            for (let k = 1; k < 10; k++) {
                for (let l = 1; l < 10; l++) {
                    if (specialNum % i == 0 && specialNum % j == 0 && specialNum % k == 0 && specialNum % l == 0) {
                        output += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(output);
}
specialNumber(["3"]);