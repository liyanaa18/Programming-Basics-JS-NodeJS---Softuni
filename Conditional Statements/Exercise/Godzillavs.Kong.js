function godzillavsKong(input)
{
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let priceClothesAStatist = Number(input[2]);

    let decorSum = budget / 10;
    let clothesSum = statistCount * priceClothesAStatist;

    if (statistCount >= 150)
    {
        clothesSum = clothesSum - clothesSum * 0.10;
    }

    let total = decorSum + clothesSum;

    let temp = Math.abs(budget - total);

    if (budget >= total)
    {
        console.log("Action!");
        console.log(`Wingard starts filming with ${temp.toFixed(2)} leva left.`);
    }
    else
    {
        console.log("Not enough money!");
        console.log(`Wingard needs ${temp.toFixed(2)} leva more.`);
    }
}

godzillavsKong(["9587.88",

"222",

"55.68"]);