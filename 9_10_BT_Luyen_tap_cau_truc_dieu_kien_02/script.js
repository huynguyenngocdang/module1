const feetConversion = 3.2808;

function temperatureConverterToC(valueTemp) {
  inputTemp = parseFloat(valueTemp);
  document.getElementById("inputCelcius").value = (
    (inputTemp - 32) /
    1.8
  ).toFixed(2);
}

function temperatureConverterToF(valueTemp) {
  inputTemp = parseFloat(valueTemp);
  document.getElementById("inputFahrenheit").value = (
    inputTemp * 1.8 +
    32
  ).toFixed(2);
}

function chuyenF() {
  let c = document.getElementById("doC").value;
  let f = (c * 9) / 5 + 32;
  document.getElementById("doF").value = new Intl.NumberFormat().format(f);
}

function chuyenC() {
  let f = document.getElementById("doF").value;
  let c = ((f - 32) * 5) / 9;
  document.getElementById("doC").value = new Intl.NumberFormat().format(c);
}

const feet_conversion = 0.305;
const meter_conversion = 3.279;


function convertMeterFeet(inputMeasurement, id) {
  let thisMeasure = new Measurement(inputMeasurement);
  
  switch (id) {
    case "inputMeter":
      document.getElementById("inputFeet").value = thisMeasure.getFeet();
      break;

      case "inputFeet":
        document.getElementById("inputMeter").value = thisMeasure.getMeter();
        break;
  
    default:
      alert("Invalid input")
      break;
  }
}



class Measurement {
  constructor(measure) {
    this.measure = measure;
  }
  getFeet() {
    return this.measure * 3.279;
  }
  getMeter() {
    return this.measure * 0.305;
  }
}


function chuyenFeet() {
  let meter = document.getElementById("meter").value;
  let feet = meter * feetConversion;
  document.getElementById("feet").value = new Intl.NumberFormat().format(feet);
}

function chuyenMet() {
  let feet = document.getElementById("feet").value;
  let meter = feet / feetConversion;
  document.getElementById("meter").value = new Intl.NumberFormat().format(
    meter
  );
}

function tinhDienTichVuong() {
  let a = document.getElementById("canhHinhVuong").value;
  let squareArea = a * a;
  document.getElementById("dienTichHinhVuong").innerHTML =
    new Intl.NumberFormat().format(squareArea);
}

function tinhDienTichChuNhat() {
  let a = document.getElementById("aChuNhat").value;
  let b = document.getElementById("bChuNhat").value;
  let recArea = a * b;
  document.getElementById("dienTichChuNhat").innerHTML =
    new Intl.NumberFormat().format(recArea);
}

function tinhDienTichTamGiacVuong() {
  let a = document.getElementById("aTamGiacVuong").value;
  let b = document.getElementById("bTamGiacVuong").value;
  let result = (a * b) / 4;
  document.getElementById("dienTichTamGiacVuong").innerHTML =
    new Intl.NumberFormat().format(result);
}

function timNghiemBac1() {
  let a = document.getElementById("bai6a").value;
  let b = document.getElementById("bai6b").value;
  let x;
  if (a == 0) {
    document.getElementById("resultBai6").innerHTML = "Phương trình vô nghiệm";
  } else if (b == 0) {
    document.getElementById("resultBai6").innerHTML =
      "Phương trình vô số nghiệm";
  } else {
    x = -b / a;
    document.getElementById("resultBai6").innerHTML =
      "x = " + new Intl.NumberFormat().format(x);
  }
}

function timNghiemBac2() {
  let a = document.getElementById("bai7a").value;
  let b = document.getElementById("bai7b").value;
  let c = document.getElementById("bai7c").value;
  let x;
  let x1;
  let x2;
  let delta;
  if (a == 0) {
    document.getElementById("resultBai7").innerHTML = "Phương trình vô nghiệm";
  } else {
    delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
      document.getElementById("resultBai7").innerHTML =
        "Phương trình vô nghiệm";
    } else if (delta == 0) {
      x = -b / (2 * a);
      document.getElementById("resultBai7").innerHTML =
        "Nghiệm kép x = " + new Intl.NumberFormat().format(x);
    } else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("resultBai7").innerHTML =
        "Nghiệm x1 = " +
        new Intl.NumberFormat().format(x1) +
        " Nghiệm x2  = " +
        new Intl.NumberFormat().format(x2);
    }
  }
}

function tinhTuoiBai8() {
  let age = document.getElementById("tuoiBai8").value;
  switch (true) {
    case age >= 0 && age <= 120:
      document.getElementById("resultBai8").innerHTML = "Đây là tuổi người";
      break;

    default:
      document.getElementById("resultBai8").innerHTML =
        "Đây không phải là tuổi người";
      break;
  }
}

function bai9Function() {
  let a = parseInt(document.getElementById("bai9a").value);
  let b = parseInt(document.getElementById("bai9b").value);
  let c = parseInt(document.getElementById("bai9c").value);
  let textResult = "";

  if (a + b > c && b + c > a && a + c > b && a > 0 && b > 0 && c > 0) {
    textResult = "Đây là tam giác";
  } else {
    textResult = "Đây không phải là tam giác";
  }

  document.getElementById("resultBai9").innerHTML = textResult;
}

function bai10Function() {
  let mucDien1 = 1728;
  let mucDien2 = 1786;
  let mucDien3 = 2074;
  let mucDien4 = 2612;
  let mucDien5 = 2919;
  let mucDien6 = 3015;
  let dienTieuThu = document.getElementById("dienTieuThu").value;
  let tienDien;
  let vat;
  let total;

  if (dienTieuThu <= 50) {
    tienDien = dienTieuThu * mucDien1;

    document.getElementById("mucDien").innerHTML = "Mức 0: ";
  } else if (dienTieuThu <= 100) {
    tienDien = (dienTieuThu - 50) * mucDien2 + mucDien1 * 50;

    document.getElementById("mucDien").innerHTML = "Mức 2: ";
  } else if (dienTieuThu <= 200) {
    tienDien = (dienTieuThu - 100) * mucDien3 + mucDien1 * 50 + mucDien2 * 50;

    document.getElementById("mucDien").innerHTML = "Mức 3: ";
  } else if (dienTieuThu <= 300) {
    tienDien =
      (dienTieuThu - 200) * mucDien4 +
      mucDien1 * 50 +
      mucDien2 * 50 +
      mucDien3 * 100;

    document.getElementById("mucDien").innerHTML = "Mức 4: ";
  } else if (dienTieuThu <= 400) {
    tienDien =
      (dienTieuThu - 300) * mucDien5 +
      mucDien1 * 50 +
      mucDien2 * 50 +
      mucDien3 * 100 +
      mucDien4 * 100;

    document.getElementById("mucDien").innerHTML = "Mức 5: ";
  } else {
    tienDien =
      (dienTieuThu - 400) * mucDien6 +
      mucDien1 * 50 +
      mucDien2 * 50 +
      mucDien3 * 100 +
      mucDien4 * 100 +
      mucDien5 * 100;

    document.getElementById("mucDien").innerHTML = "Mức 6: ";
  }
  vat = (tienDien * 8) / 100;
  total = tienDien + vat;
  document.getElementById("resultBai10").innerHTML =
    new Intl.NumberFormat().format(tienDien) + " VND";
  document.getElementById("vat").innerHTML =
    new Intl.NumberFormat().format(vat) + " VND";
  document.getElementById("total").innerHTML =
    new Intl.NumberFormat().format(total) + " VND";
}

function bai11Function() {
  let luong = document.getElementById("luong").value;
  let thue;
  if (luong <= 5000000) {
    thue = (luong * 5) / 100;
  } else if (luong <= 10000000) {
    thue = (luong * 10) / 100 - 250000;
  } else if (luong <= 18000000) {
    thue = (luong * 15) / 100 - 750000;
  } else if (luong <= 32000000) {
    thue = (luong * 20) / 100 - 1650000;
  } else if (luong <= 52000000) {
    thue = (luong * 25) / 100 - 3250000;
  } else if (luong <= 80000000) {
    thue = (luong * 30) / 100 - 5850000;
  } else {
    thue = (luong * 35) / 100 - 9850000;
  }
  document.getElementById("resultBai11").innerHTML =
    new Intl.NumberFormat().format(thue);
}

function bai12Function() {
  let principal = document.getElementById("totalLoan").value;
  let totalMonth = document.getElementById("totalLoanPeriod").value;
  let interestRate = document.getElementById("monthlyInterestRate").value / 100;
  let monthlyPayment;
  let monthlyPaymentFormatted;
  let tuso;
  let mauso;
  let tuso2;
  let mauso2;
  let remainingBalance;
  let remainingBalanceFormatted;
  let text = "";
  tuso = interestRate * (1 + interestRate) ** totalMonth;
  mauso = (1 + interestRate) ** totalMonth - 1;
  monthlyPayment = (principal * tuso) / mauso;
  monthlyPaymentFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(monthlyPayment);

  document.getElementById("resultBai12").innerHTML =
    "Số tiền hằng tháng: " + monthlyPaymentFormatted + "<br/>";

  for (let index = 0; index <= totalMonth; index++) {
    tuso2 = (1 + interestRate) ** totalMonth - (1 + interestRate) ** index;
    mauso2 = (1 + interestRate) ** totalMonth - 1;
    remainingBalance = (principal * tuso2) / mauso2;
    remainingBalanceFormatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(remainingBalance);
    text += "Tháng thứ " + index + " :" + remainingBalanceFormatted + "<br>";
  }
  document.getElementById("lichTraNo").innerHTML = text;
}
