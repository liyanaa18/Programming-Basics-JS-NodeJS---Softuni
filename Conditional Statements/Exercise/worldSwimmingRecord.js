function worldSwimmingRecord(input)
{
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let totalDistance = distance * time;
    let slowTime = Math.floor(distance / 15);
    let timeBonus = slowTime * 12.5;

    let totalTime = totalDistance + timeBonus;

    let temp = Math.abs(record - totalTime);

    if (record <= totalTime)
    {
        console.log(`No, he failed! He was ${temp.toFixed(2)} seconds slower.`)
    }
    else
    {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}

worldSwimmingRecord(["55555.67",

"3017",

"5.03"]);