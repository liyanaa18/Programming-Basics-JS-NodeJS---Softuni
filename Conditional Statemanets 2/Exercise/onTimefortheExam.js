function onTimefortheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinute = Number(input[3]);

    let examTimeInMinutes = examHour * 60 + examMinute;
    let arriveTimeInMinutes = arriveHour * 60 + arriveMinute;

    let earlyTemp = Math.abs(arriveTimeInMinutes - examTimeInMinutes);
    let lateTemp = Math.abs(arriveTimeInMinutes - examTimeInMinutes);

    if (arriveTimeInMinutes > examTimeInMinutes) {
        console.log('Late');

        if (lateTemp < 60) {
            console.log(`${lateTemp} minutes after the start`);
        }
        else {
            let hoursAfter = Math.floor(lateTemp / 60);
            let minutesAfter = lateTemp % 60;

            if (minutesAfter < 10) {
                console.log(`${hoursAfter}:0${minutesAfter} hours after the start`);
            }
            else {
                console.log(`${hoursAfter}:${minutesAfter} hours after the start`);
            }
        }
    }
    else if (arriveTimeInMinutes == examTimeInMinutes || earlyTemp <= 30) {
        console.log('On time');

        if (earlyTemp < 60 && earlyTemp != 0) {
            console.log(`${earlyTemp} minutes before the start`);
        }
        else if (earlyTemp >= 60 && earlyTemp <= 30) {
            let hours = Math.floor(earlyTemp / 60);
            let minutes = earlyTemp % 60;

            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            }
            else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
    else if (earlyTemp > 30) {
        console.log('Early');

        if (earlyTemp < 60 && earlyTemp != 0) {
            console.log(`${earlyTemp} minutes before the start`);
        }
        else if (earlyTemp >= 60) {
            let hours = Math.floor(earlyTemp / 60);
            let minutes = earlyTemp % 60;

            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            }
            else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}
onTimefortheExam(["11", "30", "8", "12"]);