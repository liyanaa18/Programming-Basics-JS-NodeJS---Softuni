function walking(input) {
    let goalSteps = 10000;

    let index = 0;
    let allSteps = 0;

    while (input[index] != 'Going home') {
        let steps = Number(input[index]);
        allSteps += steps;
        index++;

        if (goalSteps <= allSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${allSteps - goalSteps} steps over the goal!`);
            break;
        }
    }

    if (input[index] == 'Going home') {
        let stepsToHome = Number(input[index + 1]);
        allSteps += stepsToHome;

        if (goalSteps <= allSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${allSteps - goalSteps} steps over the goal!`);
        }
        else {
            console.log(`${goalSteps - allSteps} more steps to reach goal.`);
        }
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);