function areaOfFigures(input)
{
    let type = input[0];

    if (type == "square")
    {
        let a = Number(input[1]);
        let squareArea = a * a;
        console.log(squareArea.toFixed(3));
    }
    else if (type == "rectangle")
    {
        let first = Number(input[1]);
        let second = Number(input[2]);
        let rectangleArea = first * second;
        console.log(rectangleArea.toFixed(3));
    }
    else if (type == "circle")
    {
        let radius = Number(input[1]);
        let pi = Math.PI;
        let circleArea = radius * radius * pi;
        console.log(circleArea.toFixed(3));
    }
    else if (type == "triangle")
    {
        let c = Number(input[1]);
        let hc = Number(input[2]);
        let triangleArea = (c * hc) / 2;
        console.log(triangleArea.toFixed(3));
    }
}

areaOfFigures(["triangle", "4.5", "20"]);