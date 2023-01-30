function everest(input) {
    let index = 0;
    let counter = 1;
    let total = 5364;

    while (input[index] != 'END') {
        let text = input[index];
        index++;
        let metersClimbed = Number(input[index]);
        index++;

        if (text == 'Yes') {
            counter++;
        }

        if (counter > 5 && total < 8848) {
            console.log("Failed!");
            console.log(`${total}`);
            break;
        }

        else if (counter <= 5 && total >= 8848) {
            console.log(`Goal reached for ${counter} days!`);
            break;
        }

        total += metersClimbed;
    }

    if (total < 8848 && counter <= 5) {
        console.log("Failed!");
        console.log(`${total}`);
    }

}
everest(["Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"])








