function timePlus15Min(input)
{
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let total = hours * 60 + minutes + 15;
    
    let newHour = Math.floor(total / 60);
    let newMinutes = total % 60;

    if (newHour > 23)
    {
        newHour = 0;
    }
    if (newMinutes < 10)
    {
        console.log(`${newHour}:0${newMinutes}`);
    }
    else
    {
        console.log(`${newHour}:${newMinutes}`)
    }
}

timePlus15Min(["1",

"46"]);