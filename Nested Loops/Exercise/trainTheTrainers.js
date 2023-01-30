function trainTheTrainers(input) {
    let countJudges = Number(input[0]);
    let index = 1;
    let totalGradeSum = 0;
    let countPresentation = 0;

    while (input[index] != 'Finish') {
        countPresentation++;
        let namePresentation = input[index];
        let gradeSum = 0;

        for (let i = 1; i <= countJudges; i++) {
            index++;
            let grade = Number(input[index]);
            gradeSum += grade;
        }

        let averageGrade = gradeSum / countJudges;
        totalGradeSum += averageGrade;
        console.log(`${namePresentation} - ${averageGrade.toFixed(2)}.`);
        index++;
    }
    let totalAverageGrade = totalGradeSum / countPresentation;
    console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`);
}
trainTheTrainers(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])