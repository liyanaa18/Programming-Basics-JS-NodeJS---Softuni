function multiplicationTable() {
    let size = 10;

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let result = i * j;
            console.log(`${i} * ${j} = ${result}`);
        }
    }
}

multiplicationTable();