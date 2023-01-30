function shopping(input)
{
    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);

    let priceVideoCards = 250 * videoCardsCount;
    let priceProcessors = (0.35 * priceVideoCards) * processorCount;
    let priceRamMemory = (0.10 * priceVideoCards) * ramMemoryCount;

    let total = priceProcessors + priceRamMemory + priceVideoCards;

    if (videoCardsCount > processorCount)
    {
        total = total - total * 0.15;
    }

    let temp = Math.abs(total - budget);

    if (budget >= total)
    {
        console.log(`You have ${temp.toFixed(2)} leva left!`);
    }
    else 
    {
        console.log(`Not enough money! You need ${temp.toFixed(2)} leva more!`);
    }
}

shopping(["920.45",

"3",

"1",

"1"]);