function trekkingMania(input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;


    let totalPerson = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let x = index; x <= groups; x++) {
        let persons = Number(input[index]);
        index++;
        totalPerson += persons;
        if (persons <= 5) {
            musala += persons;
        } else if (persons >= 6 && persons <= 12) {
            monblan += persons;
        } else if (persons >= 13 && persons <= 25) {
            kilimandjaro += persons;
        } else if (persons >= 26 && persons <= 40) {
            k2 += persons;
        } else {
            everest += persons;
        }

    }
    musalaPercentage = musala / totalPerson * 100;
    monblanPercetage = monblan / totalPerson * 100;
    kilimandjaroPercentage = kilimandjaro / totalPerson * 100;
    k2Percentage = k2 / totalPerson * 100;
    everestPercentage = everest / totalPerson * 100;
    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${monblanPercetage.toFixed(2)}%`);
    console.log(`${kilimandjaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);


}




trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
