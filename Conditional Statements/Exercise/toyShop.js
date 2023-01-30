function toyShop(input)
{
    let price = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trackCount = Number(input[5]);

    let totalCount = puzzleCount + dollCount + bearCount + minionsCount + trackCount;

    let totalBill = puzzleCount * 2.60 + dollCount * 3.0 + bearCount * 4.10 + minionsCount * 8.20 + trackCount * 2.0;

    if (totalCount >= 50)
    {
        totalBill = totalBill - totalBill * 0.25;
    }

    totalBill = totalBill - totalBill * 0.10;

    let temp = Math.abs(totalBill - price);

    if (totalBill >= price)
    {
        console.log(`Yes! ${temp.toFixed(2)} lv left.`)
    }
    else
    {
        console.log(`Not enough money! ${temp.toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8",

"20",

"25",

"30",

"50",

"10"]);