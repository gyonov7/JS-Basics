function workingHours(input) {
    let h = Number(input[0]);
    let day = input[1];

    if (h >= 10 && h <= 18) {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
                case 'Sunday':
                    console.log('closed');
                    break;
        }
    } else {
        console.log('closed');
    }

}


workingHours(["18", 'Sunday'])
