function lunchBreak(input)
{
    let name = input[0];
    let timeEpisode = Number(input[1]);
    let timeBreak = Number(input[2]);

    let lunchTime = timeBreak / 8;
    let freeTime = timeBreak / 4;

    let leftTime = timeBreak - lunchTime - freeTime;

    let temp = Math.abs(timeEpisode - leftTime);

    if (leftTime >= timeEpisode)
    {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(temp)} minutes free time.`)
    }
    else
    {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(temp)} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",

"48",

"60"]);