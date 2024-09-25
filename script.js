document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const inputUnit = document.getElementById('unitSelect').value;
    const resultDisplay = document.getElementById('resultDisplay');

    if (isNaN(tempInput) || tempInput === '') {
        resultDisplay.innerText = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp = 0;
    let targetUnit = '';

    switch (inputUnit) {
        case 'Celsius':
            convertedTemp = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)} °F, Kelvin: ${(temperature + 273.15).toFixed(2)} K`;
            break;
        case 'Fahrenheit':
            convertedTemp = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)} °C, Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
            break;
        case 'Kelvin':
            convertedTemp = `Celsius: ${(temperature - 273.15).toFixed(2)} °C, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
    }

    resultDisplay.innerText = `Converted Temperature: ${convertedTemp}`;
}
