function sumNumbers(input) {
    let number = Number(input[0]);
    let sum = 0;

    let index = 1;

    while (sum < number) {
        let digit = Number(input[index]);
        sum += digit;
        index++;
    }

    console.log(sum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);

// Напишете функция, която чете цяло число от масив и на всеки следващ ред цели числа,
// докато тяхната сума стане по-голяма
// или равна на първоначалното число.
// След приключване да се отпечата сумата на въведените числа.