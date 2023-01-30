function FishTank(input)
{
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let capacity = length * width * height;
    let capacityInLiters = capacity / 1000;

    let percentArea = percent / 100;
    let total = capacityInLiters * ( 1 - percentArea);

    console.log(total);
}

FishTank(["105 ",

"77 ",

"89 ",

"18.5 "]);