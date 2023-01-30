function evenPowersOf2(input) {
    let n = Number(input[0]);
    let numbersWithEvenPowers = 1;

    for (let i = 0; i <= n; i += 2) {
        console.log(numbersWithEvenPowers);
        numbersWithEvenPowers = numbersWithEvenPowers * 2 * 2;
    }
}
evenPowersOf2(["4"]);