function moving(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);

    let sizeOfPlace = length * width * height;

    let index = 3 ;
    let freeCubic = 0;
    let command = input[index];
    let sizeOfCarton = 1;

    while (command != 'Done') {
        let cartonCount = Number(input[index]);
        freeCubic += cartonCount;

        if (freeCubic > sizeOfPlace) {
            console.log(`No more free space! You need ${freeCubic - sizeOfPlace} Cubic meters more.`);
            break;
        }
        
        index++;
        command  = input[index];
    }

    if (input[index] == 'Done' && freeCubic <= sizeOfPlace) {
        console.log(`${sizeOfPlace - freeCubic} Cubic meters left.`);
    }
}

moving(["10",

"1",

"2",

"4",

"6",

"Done"])