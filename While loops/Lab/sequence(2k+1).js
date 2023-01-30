function sequence2kPlusOne(input)
{
    let number = Number(input[0]);

    let result = 1;

    while (result <= number)
    {
        console.log(result);
        result = 2 * result + 1;
    }
}

sequence2kPlusOne(["31"]);
// Напишете програма, която чете число n, въведено от потребителя и 
// отпечатва всички числа ≤ n от редицата: 1, 3, 7, 15, 31, …. 
// Всяко следващо число се изчислява като умножим предишното с 2 и добавим 1.