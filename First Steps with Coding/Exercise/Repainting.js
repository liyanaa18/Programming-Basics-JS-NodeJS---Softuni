function repainting(input)
{
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let sumNylon = (nylon + 2) * 1.50;
    let sumPaint = (paint * 1.10) * 14.50;
    let sumThinner = thinner * 5.00;
    let sumBags = 0.40;

    let sumMaterials = sumNylon + sumPaint + sumThinner + sumBags;
    let sumMastres = (sumMaterials * 0.30) * hours;

    let finalSum = sumMaterials + sumMastres;

    console.log(finalSum);
}

repainting(["5 ",

"10 ",

"10 ",

"1 "]);