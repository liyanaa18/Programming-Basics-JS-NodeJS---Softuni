function sumPrimeNonPrime(input) {
    let index = 0;

    let primeSum = 0;
    let notPrimeSum = 0;

    while (input[index] != 'stop') {
        let num = Number(input[index]);
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j == 0) {
                isPrime = false;
                break;
            }
        }

        if (num < 0) {
            console.log("Number is negative.");
        }
        else if (isPrime && num >= 2) {
            primeSum += num;
        }
        else {
            notPrimeSum += num;
        }

        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeSum}`);
}
sumPrimeNonPrime(["30",

    "83",

    "33",

    "-1",

    "20",

    "stop"])