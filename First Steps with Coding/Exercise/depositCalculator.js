function depositCalculator(input)
{
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearIncrease = Number(input[2]);

    let increase = depositSum * (yearIncrease / 100);
    let monthIncrease = increase / 12;

    let finalSum = depositSum + (depositTerm * monthIncrease);

    console.log(finalSum);
}

depositCalculator(["200 ",

"3 ",

"5.7 "]);

