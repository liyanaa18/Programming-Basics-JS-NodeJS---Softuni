function schoolSupplies(input)
{
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaning = Number(input[2]);
    let percestDiscount = Number(input[3]);

    let sum = pens * 5.80 + markers * 7.20 + cleaning * 1.20;
    let discountSum = sum - (sum * (percestDiscount / 100));

    console.log(discountSum);
}

schoolSupplies(["2 ",

"3 ",

"4 ",

"25 "]);