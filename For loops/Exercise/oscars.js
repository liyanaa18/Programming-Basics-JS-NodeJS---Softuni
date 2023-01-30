function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryCounts = Number(input[2]);

    let totalPoints = academyPoints;
    let needPoints = 1250.5;

    for (let i = 3; i < input.length; i += 2) {
        let juryName = input[i];
        let juryPoints = Number(input[i + 1]);
        let juryNameLength = Number(juryName.length);
        totalPoints = totalPoints + ((juryNameLength * juryPoints) / 2);

        if (totalPoints > needPoints) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
        }
    }

    if (totalPoints <= needPoints) {
        console.log(`Sorry, ${actorName} you need ${(needPoints - totalPoints).toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);