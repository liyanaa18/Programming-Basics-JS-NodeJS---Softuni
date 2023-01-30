function sumAndProduct(input) {
    let num = Number(input[0]);
    let flag = false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let multiplynig = a * b * c * d;

                    let temp = Math.trunc(multiplynig / sum);

                    if ((sum == multiplynig) && num % 10 == 5) {
                        flag = true;
                        console.log(`${a}${b}${c}${d}`);
                        break;
                    }
                    else if ((temp == 3) && num % 3 == 0) {
                        flag = true;
                        console.log(`${d}${c}${b}${a}`);
                        break;
                    }
                }
                if (flag) {
                    break;
                }
            }
            if (flag) {
                break;
            }
        }
        if (flag) {
            break;
        }
    }

    if (!flag) {
        console.log("Nothing found");
    }
}
sumAndProduct(["11125"]) 