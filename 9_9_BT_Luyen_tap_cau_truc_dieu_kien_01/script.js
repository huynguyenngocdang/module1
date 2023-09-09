function functionBai1() {
  let a = document.getElementById("a1").value;
  let b = document.getElementById("b1").value;
  let textResult = "";

  if (a % b == 0) {
    textResult = "A chia hết cho B";
  } else {
    textResult = "A không chia hết cho B";
  }
  document.getElementById("resultBai1").innerHTML = textResult;
}

function functionBai2() {
  let age = document.getElementById("age").value;
  let textResult = "";

  if (age >= 14 && age <= 17) {
    textResult = "Được nhập học";
  } else {
    textResult = "Không được nhập học";
  }
  document.getElementById("resultBai2").innerHTML = textResult;
}

function functionBai3() {
  let number = document.getElementById("numberWhole").value;
  let textResult = "";
  switch (true) {
    case number > 0:
      textResult = "Số lớn hơn 0";
      break;
    case number < 0:
      textResult = "Số bé hơn 0";
      break;
    case number == 0:
      textResult = "Số bằng 0";
      break;
    default:
      textResult = "Không xác định";
      break;
  }
  document.getElementById("resultBai3").innerHTML = textResult;
}

function functionBai4() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let number3 = document.getElementById("number3").value;
  let status = "";
  if (number1 > number2) {
    if (number1 > number3) {
      status = "Số thứ 1 (Giá trị: " + number1 + ") là lớn nhất";
    } else {
      status = "Số thứ 3 (Giá trị: " + number3 + ") là lớn nhất";
    }
  } else if (number2 > number3) {
    status = "Số thứ 2 (Giá trị: " + number2 + ") là lớn nhất";
  } else {
    status = "Số thứ 3 (Giá trị: " + number3 + ") là lớn nhất";
  }
  document.getElementById("resultBai4").innerHTML = status;
}

function functionBai5() {
  let averageTotal = document.getElementById("averageTotal").value;
  let averageLowest = document.getElementById("averageLowest").value;
  let averageMth = document.getElementById("averageMth").value;
  let averageLit = document.getElementById("averageLit").value;
  let averageEng = document.getElementById("averageEng").value;
  let status = "";

  if (averageTotal >= 8) {
    if (averageLowest >= 6.5) {
      if (averageMth >= 8 || averageLit >= 8 || averageEng >= 8) {
        status = "Học lực giỏi";
      } else {
        status = "Học lực khá";
      }
    } else {
      status = "Học lực khá";
    }
  } else if (averageTotal >= 6.5) {
    if (averageLowest >= 5) {
      if (averageMth >= 6.5 || averageLit >= 6.5 || averageEng >= 6.5) {
        status = "Học lực khá";
      } else {
        status = "Học lực trung bình";
      }
    } else {
      status = "Học lực trung bình";
    }
  } else if (averageTotal >= 5.0) {
    if (averageLowest >= 3.5) {
      if (averageMth >= 5 || averageLit >= 5 || averageEng >= 5) {
        status = "Học lực trung bình";
      } else {
        status = "Học lực yếu";
      }
    } else {
      status = "Học lực yếu";
    }
  } else if (averageTotal >= 3.5) {
    if (averageLowest >= 2) {
      if (averageMth >= 3.5 || averageLit >= 3.5 || averageEng >= 3.5) {
        status = "Học lực yếu";
      } else {
        status = "Học lực kém";
      }
    } else {
      status = "Học lực kém";
    }
  } else {
    status = "Học lực kém";
  }

  document.getElementById("resultBai5").innerHTML = status;
}

function functionBai6() {
  let revenue = document.getElementById("doanhThu").value;

  let muc1 = 1.5 / 100;
  let muc2 = 3 / 100;
  let muc3 = 4 / 100;
  let commisionAmount, statusLevel, statusResult;

  if (revenue >= 800) {
    commisionAmount = revenue * muc3;
    statusLevel = "Mức 3: ";
    statusResult = commisionAmount + " triệu đồng";
  } else if (revenue >= 500) {
    commisionAmount = revenue * muc2;
    statusLevel = "Mức 2: ";
    statusResult = commisionAmount + " triệu đồng";
  } else if (revenue >= 280) {
    commisionAmount = revenue * muc1;
    statusLevel = "Mức 1: ";
    statusResult = commisionAmount + " triệu đồng";
  } else {
    statusLevel = "Mức 0: ";
    statusResult = " 0 triệu đồng";
  }

  document.getElementById("commissionLevel").innerHTML = statusLevel;
  document.getElementById("resultBai6").innerHTML = statusResult;
}

function functionBai7() {
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
    vat = (tienDien * 8) / 100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 0: ";
  } else if (dienTieuThu <= 100) {
    tienDien = (dienTieuThu - 50) * mucDien2 + mucDien1 * 50;
    vat = (tienDien * 8) / 100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 2: ";
  } else if (dienTieuThu <= 200) {
    tienDien = (dienTieuThu - 100) * mucDien3 + mucDien1 * 50 + mucDien2 * 50;
    vat = (tienDien * 8) / 100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 3: ";
  } else if (dienTieuThu <= 300) {
    tienDien =
      (dienTieuThu - 200) * mucDien4 +
      mucDien1 * 50 +
      mucDien2 * 50 +
      mucDien3 * 100;
    vat = (tienDien * 8) / 100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 4: ";
  } else if (dienTieuThu <= 400) {
    tienDien =
      (dienTieuThu - 300) * mucDien5 +
      mucDien1 * 50 +
      mucDien2 * 50 +
      mucDien3 * 100 +
      mucDien4 * 100;
    vat = (tienDien * 8) / 100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 5: ";
  } else {
    tienDien =
      (dienTieuThu - 400) * mucDien6 +
      mucDien1 * 50 +
      mucDien2 * 50 +
      mucDien3 * 100 +
      mucDien4 * 100 +
      mucDien5 * 100;
    vat = (tienDien * 8) / 100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 6: ";
  }
  document.getElementById("resultBai7").innerHTML =
    new Intl.NumberFormat().format(tienDien) + " VND";
  document.getElementById("vat").innerHTML =
    new Intl.NumberFormat().format(vat) + " VND";
  document.getElementById("total").innerHTML =
    new Intl.NumberFormat().format(total) + " VND";
}
