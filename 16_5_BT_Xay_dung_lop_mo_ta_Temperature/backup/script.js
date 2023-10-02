class Temperature {
  constructor(temp) {
    this.temp = parseFloat(temp);
  }
  getTemp() {
    return this.temp;
  }
  setTemp(newTemp) {
    this.temp = newTemp;
  }
  getTempCfromF() {
    return 5/9 * (this.temp - 32);
  }
  getTempCfromK() {
    return this.temp - 273.15;
  }
  getTempFfromC() {
    return this.temp * 9/5 + 32;
  }
  getTempFfromK() {
    return (this.temp -273.15)*1.8 +32;
  }
  getTempKfromC() {
    return this.temp + 273.15;
  }
  getTempKfromF() {
    return (this.temp -32) * 5/9 + 273.15;
  }

}

let celcius = document.getElementById("tempC");
let fahrenheit = document.getElementById("tempF");
let kevin = document.getElementById("tempK");

function calculateTemp(valueInput, id) {
  if (isNumeric(valueInput)) {
  
    let temperature = new Temperature(valueInput);

    switch (id) {
      case "tempC":
        fahrenheit.value = temperature.getTempFfromC();
        kevin.value = temperature.getTempKfromC();
        break;
        case "tempF":
        celcius.value = temperature.getTempCfromF();
        kevin.value = temperature.getTempKfromF();
        break;
        case "tempK":
          celcius.value = temperature.getTempCfromK();
          fahrenheit.value = temperature.getTempFfromK();
        break;
    
      default:
        celcius.value = 0;
        fahrenheit.value = 0;
        kevin.value = 0;
        break;
    }

  } else {
    alert("Invalid input");
    celcius.value = 0;
    fahrenheit.value = 0;
    kevin.value = 0;
  }
}

function isNumeric(value) {
  return !isNaN(value) && isFinite(value);
}
