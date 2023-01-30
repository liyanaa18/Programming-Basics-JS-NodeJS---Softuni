function graduation(input) {
    let name = input[0];

    let grades = 1;
    let excluded = 0;
    let index = 1;
    let total = 0;

    while (grades <= 12) {
        if (Number(input[index]) >= 4.00) {
            total += Number(input[index]);
        }
        else {
            excluded++;

            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grades - 1} grade`);
                break;
            }
        }

        index++;
        grades++;
    }

    let average = total / 12;

    if (grades == 13) {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
graduation(["Gosho",

    "5",

    "5.5",

    "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
