function christmasPreparation(input) {
    let wrappingPaper = Number(input[0]);
    let cloth = Number(input[1]);
    let glue = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let total = wrappingPaper * 5.80 + cloth * 7.20 + glue * 1.20;
    let percent = (100 - percentDiscount) / 100;
    let totalAfterDiscount = total * percent;

    console.log(totalAfterDiscount.toFixed(3));
}
