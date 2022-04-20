function weatherForecast(input) {

    let forecast = String(input);

    if (forecast === 'sunny') {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}
weatherForecast(['sunny']);
weatherForecast(['cloudy']);
weatherForecast(['snowy']);
