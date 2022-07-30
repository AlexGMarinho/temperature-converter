import { calculationForCelsius, calculationForFahrenheit } from './temperatureCalculations.js';

function convertTemperature(temperature, converter) {
    let result;

    if (converter === 'C') {
        result = calculationForCelsius(temperature);
    } else if (converter === 'F') {
        result = calculationForFahrenheit(temperature);
    }
    return result;
}

export default convertTemperature;
