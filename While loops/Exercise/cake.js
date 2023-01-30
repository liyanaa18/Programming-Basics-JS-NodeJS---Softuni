function cake(input) {
    let length = Number(input[0]);
    let height = Number(input[1]);

    let cakeSize = length * height;

    let index = 2;
    let piecesCount = 0;

    while (input[index] != "STOP") {
        let pieces = Number(input[index]);
        cakeSize -= pieces;
        piecesCount++;

        if (cakeSize < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }

        index++;
    }

    if (input[index] == "STOP") {
        console.log(`${cakeSize} pieces are left.`);
    }
}

cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"]);