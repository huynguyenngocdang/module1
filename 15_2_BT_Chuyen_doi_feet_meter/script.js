const feet_conversion = 0.305;
const meter_conversion = 3.279;

function temperatureConverterToM(valueInput) {
    let inputValue = parseFloat(valueInput);
    document.getElementById("inputMeter").value = (inputValue*feet_conversion).toFixed(3);
}

function temperatureConverterToF(valueInput) {
    let inputValue = parseFloat(valueInput);
    document.getElementById("inputFeet").value = (inputValue*meter_conversion).toFixed(3);
}