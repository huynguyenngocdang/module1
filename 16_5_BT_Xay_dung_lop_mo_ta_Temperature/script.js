class Temperature {
  constructor(value, type) {
    this.value = parseFloat(value);
    this.type = type;
    this.tempC = function (value, type) {
      if (type == "C") {
        return value;
      } else if (type == "F") {
        return (((value - 32) * 5) / 9).toFixed(2);
      } else if (type == "K") {
        return +(value - 273);
      } else {
        return 0;
      }
    };
    this.tempF = function (value, type) {
      if (type == "F") {
        return value;
      } else if (type == "C") {
        return ((value * 9) / 5 + 32).toFixed(2);
      } else if (type == "K") {
        return ((value * 9) / 5 - 459.67).toFixed(2);
      } else {
        return 0;
      }
    };
    this.tempK = function (value, type) {
      if (type == "K") {
        return value;
      } else if (type == "C") {
        return value + 273;
      } else if (type == "F") {
        return (((value + 459.67) * 5) / 9).toFixed(2);
      } else {
        return 0;
      }
    };
  }
}

function calculateTemp(value, type) {
  if (isNumeric(value)) {
    let valuePass = parseFloat(value);
    let resultPrint = new Temperature(valuePass, type);
    if (resultPrint.tempK(valuePass, type) < 0) {
      alert("Below absolute 0");
      location.reload()
    } else {
      document.getElementById("tempC").value = resultPrint.tempC(
        valuePass,
        type
      );
      document.getElementById("tempF").value = resultPrint.tempF(
        valuePass,
        type
      );
      document.getElementById("tempK").value = resultPrint.tempK(
        valuePass,
        type
      );
    }
  } else {
    alert("Invalid input");
  }
}

function isNumeric(value) {
  return !isNaN(value) && isFinite(value);
}
