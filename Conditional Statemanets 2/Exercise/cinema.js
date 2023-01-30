function cinema(input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let result = 0;

    if (typeProjection == 'Premiere') {
        result = rows * columns * 12.00;
    }
    else if (typeProjection == 'Normal') {
        result = rows * columns * 7.50;
    }
    else if (typeProjection == 'Discount') {
        result = rows * columns * 5.00;
    }

    console.log(`${result.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);
