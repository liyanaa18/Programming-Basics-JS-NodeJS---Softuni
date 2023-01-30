function bonusPoints(input)
{
    let points = Number(input[0]);

    let bonus = 0.0;

    if (points <= 100)
    {
        bonus = 5;
    }
    else if (points >= 1000)
    {
        bonus = points / 10;
    }
    else 
    {
        bonus = points / 5;
    }


    if (points % 2 == 0)
    {
        bonus += 1;
    }
    else if (points % 5 == 0)
    {
        bonus += 2;
    }

    console.log(bonus);

    let result = bonus + points;

    console.log(result);
}

bonusPoints(["15875"]);