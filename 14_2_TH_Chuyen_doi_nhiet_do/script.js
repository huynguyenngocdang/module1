function temperatureConverterToC(valueTemp) {
    inputTemp = parseFloat(valueTemp);
    document.getElementById("inputCelcius").value = ((inputTemp-32) / 1.8).toFixed(2);
}

function temperatureConverterToF(valueTemp) {
    inputTemp = parseFloat(valueTemp);
    document.getElementById("inputFahrenheit").value = (inputTemp * 1.8 + 32).toFixed(2);
}