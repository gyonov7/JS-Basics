function onTimeFroTheExam(input) {

    let h = Number(input[0]);
    let m = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let hoursInMinutes = h * 60
    let arrivalHoursInMinutes = arrivalHours * 60

    let examStart = hoursInMinutes + m;
    let arrivalExam = arrivalHoursInMinutes + arrivalMinutes;
    let diff = Math.abs(examStart - arrivalExam)
    let hours = Math.floor(diff / 60);
    let min = diff % 60;

    if (examStart < arrivalExam) {
        console.log('Late');
        if (diff >=60) {
            if (min < 10) {
                console.log(`${hours}:0${min} hours after the start`);
            } else {
                console.log(`${hours}:${min} hours after the start`);
            }
        } else {
            console.log(`${min} minutes after the start`);
        }
    } else if (diff === 0) {
        console.log('On time');
    } else if (diff <= 30) {
        console.log('On time');
        console.log(`${min} minutes before the start`);
    } else if (diff >= 60) {
        if (min < 10) {
            console.log('Early');
            console.log(`${hours}:0${min} hours before the start`);
        } else {
            console.log('Early');
            console.log(`${hours}:${min} hours before the start`);

        }

    } else if (diff > 30) {
        console.log('Early');
        console.log(`${min} minutes before the start`);

    }


}

onTimeFroTheExam(["10",
    "00",
    "8",
    "59"])



















