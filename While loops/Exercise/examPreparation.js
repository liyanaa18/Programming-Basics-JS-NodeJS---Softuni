function examPreparation(input) {
    let unsatisfactoryGrades = Number(input[0]);

    let goodGrades = 0;
    let badGrades = 0;
    let sumOfAllGrades = 0;
    let lastTaskName = " ";

    let index = 1;
    let allTasks = 0;

    for (let i = 2; i < input.length; i += 2) {
        let grade = Number(input[i]);
        sumOfAllGrades += grade;

        if (grade <= 4) {
            badGrades++;
        }
    }

    while (badGrades < unsatisfactoryGrades) {
        let taskName = input[index];

        if (index % 2 == 0) {
            goodGrades++;
        }
        else if (index % 2 != 0 && input[index] != 'Enough') {
            allTasks++;
            lastTaskName = taskName;
        }

        if (input[index] == 'Enough') {
            let average = Number(sumOfAllGrades / goodGrades);

            console.log(`Average score: ${average.toFixed(2)}`);
            console.log(`Number of problems: ${allTasks}`);
            console.log(`Last problem: ${lastTaskName}`);

            break;
        }

        index++;
    }

    if (badGrades == unsatisfactoryGrades) {
        console.log(`You need a break, ${badGrades} poor grades.`);
    }
}

examPreparation(["2",

"Income",

"3",

"GameInfo",

"6",

"BestPlayer",

"4"]);