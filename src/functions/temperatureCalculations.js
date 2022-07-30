function calculationForCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;

    return celsius;
}

function calculationForFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) / 32;

    return fahrenheit;
}

export { calculationForCelsius, calculationForFahrenheit };
