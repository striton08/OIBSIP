function validateInput() {
    const temperatureInput = document.getElementById('temperature');
    temperatureInput.value = temperatureInput.value.replace(/[^0-9.]/g, ''); // Allow only numbers and dot
}

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultDisplay = document.getElementById('result');

    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        resultDisplay.textContent = 'Please enter a valid number for temperature.';
        return;
    }

    const unit = unitSelect.value;
    let convertedTemperature, resultUnit;

    switch (unit) {
        case 'celsius':
            convertedTemperature = (temperature - 32) * (5/9);
            resultUnit = 'Celsius';
            break;
        case 'fahrenheit':
            convertedTemperature = (temperature * 9/5) + 32;
            resultUnit = 'Fahrenheit';
            break;
        case 'kelvin':
            convertedTemperature = temperature + 273.15;
            resultUnit = 'Kelvin';
            break;
        default:
            resultDisplay.textContent = 'Invalid unit selected.';
            return;
    }

    resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
