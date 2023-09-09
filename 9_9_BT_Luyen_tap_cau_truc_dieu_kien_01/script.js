function functionBai1() {
  let a = document.getElementById("a1").value;
  let b = document.getElementById("b1").value;

  if (a % b == 0) {
    document.getElementById("resultBai1").innerHTML = "A chia hết cho B";
  } else {
    document.getElementById("resultBai1").innerHTML = "A không chia hết cho B";
  }
}

function functionBai2() {
  let age = document.getElementById("age").value;

  if (age >= 14 && age <= 17) {
    document.getElementById("resultBai2").innerHTML = "Được nhập học";
  } else {
    document.getElementById("resultBai2").innerHTML = "Không được nhập học";
  }
}

function functionBai3() {
  let number = document.getElementById("numberWhole").value;
  switch (true) {
    case number > 0:
      document.getElementById("resultBai3").innerHTML = "Số lớn hơn 0";
      break;
    case number < 0:
      document.getElementById("resultBai3").innerHTML = "Số bé hơn 0";
      break;
    case number == 0:
      document.getElementById("resultBai3").innerHTML = "Số bằng 0";
      break;
    default:
      document.getElementById("resultBai3").innerHTML = "Không xác định";
      break;
  }
}

function functionBai4() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let number3 = document.getElementById("number3").value;
  if (number1 > number2) {
    if (number1 > number3) {
      document.getElementById("resultBai4").innerHTML =
        "Số thứ 1 (" + number1 + ") là lớn nhất";
    } else {
      document.getElementById("resultBai4").innerHTML =
        "Số thứ 3 (" + number3 + ") là lớn nhất";
    }
  } else if (number2 > number3) {
    document.getElementById("resultBai4").innerHTML =
      "Số thứ 2 (" + number2 + ") là lớn nhất";
  } else {
    document.getElementById("resultBai4").innerHTML =
      "Số thứ 3 (" + number3 + ") là lớn nhất";
  }
}

function functionBai5() {
  let averageTotal = document.getElementById("averageTotal").value;
  let averageLowest = document.getElementById("averageLowest").value;
  let averageMth = document.getElementById("averageMth").value;
  let averageLit = document.getElementById("averageLit").value;
  let averageEng = document.getElementById("averageEng").value;

  if (averageTotal >= 8) {
    if (averageLowest >= 6.5) {
      if (averageMth >= 8 || averageLit >= 8 || averageEng >= 8) {
        document.getElementById("resultBai5").innerHTML = "Học lực giỏi";
      } else {
        document.getElementById("resultBai5").innerHTML = "Học lực khá";
      }
    } else {
      document.getElementById("resultBai5").innerHTML = "Học lực khá";
    }
  } else if (averageTotal >= 6.5) {
    if (averageLowest >= 5) {
      if (averageMth >= 6.5 || averageLit >= 6.5 || averageEng >= 6.5) {
        document.getElementById("resultBai5").innerHTML = "Học lực khá";
      } else {
        document.getElementById("resultBai5").innerHTML = "Học lực trung bình";
      }
    } else {
      document.getElementById("resultBai5").innerHTML = "Học lực trung bình";
    }
  } else if (averageTotal >= 5.0) {
    if (averageLowest >= 3.5) {
      if (averageMth >= 5 || averageLit >= 5 || averageEng >= 5) {
        document.getElementById("resultBai5").innerHTML = "Học lực trung bình";
      } else {
        document.getElementById("resultBai5").innerHTML = "Học lực yếu";
      }
    } else {
      document.getElementById("resultBai5").innerHTML = "Học lực yếu";
    }
  } else if (averageTotal >= 3.5) {
    if (averageLowest >= 2) {
      if (averageMth >= 3.5 || averageLit >= 3.5 || averageEng >= 3.5) {
        document.getElementById("resultBai5").innerHTML = "Học lực yếu";
      } else {
        document.getElementById("resultBai5").innerHTML = "Học lực kém";
      }
    } else {
      document.getElementById("resultBai5").innerHTML = "Học lực kém";
    }
  } else {
    document.getElementById("resultBai5").innerHTML = "Học lực kém";
  }
}

function functionBai6() {
  let revenue = document.getElementById("doanhThu").value;

  let muc1 = 1.5 / 100;
  let muc2 = 3 / 100;
  let muc3 = 4 / 100;
  let commisionAmount;

  if (revenue >= 800) {
    commisionAmount = revenue * muc3;
    document.getElementById("commissionLevel").innerHTML = "Mức 3: ";
    document.getElementById("resultBai6").innerHTML =
      commisionAmount + " triệu đồng";
  } else if (revenue >= 500) {
    commisionAmount = revenue * muc2;
    document.getElementById("commissionLevel").innerHTML = "Mức 2: ";
    document.getElementById("resultBai6").innerHTML =
      commisionAmount + " triệu đồng";
  } else if (revenue >= 280) {
    commisionAmount = revenue * muc1;
    document.getElementById("commissionLevel").innerHTML = "Mức 1: ";
    document.getElementById("resultBai6").innerHTML =
      commisionAmount + " triệu đồng";
  } else {
    document.getElementById("commissionLevel").innerHTML = "Mức 0: ";
    document.getElementById("resultBai6").innerHTML = " 0 triệu đồng";
  }
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
    vat = tienDien * 10 /100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 0: ";
    document.getElementById("resultBai7").innerHTML = new Intl.NumberFormat().format(tienDien) + " VND";
    document.getElementById("vat").innerHTML = new Intl.NumberFormat().format(vat) + " VND";
    document.getElementById("total").innerHTML = new Intl.NumberFormat().format(total) + " VND";
  } else if (dienTieuThu <= 100) {
    tienDien = (dienTieuThu-50) * mucDien2 + mucDien1*50;
    vat = tienDien * 10 /100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 2: ";
    document.getElementById("resultBai7").innerHTML = new Intl.NumberFormat().format(tienDien) + " VND";
    document.getElementById("vat").innerHTML = new Intl.NumberFormat().format(vat) + " VND";
    document.getElementById("total").innerHTML = new Intl.NumberFormat().format(total) + " VND";
  } else if (dienTieuThu <= 200) {
    tienDien = (dienTieuThu-100) * mucDien3 + mucDien1*50 + mucDien2*50;
    vat = tienDien * 10 /100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 3: ";
    document.getElementById("resultBai7").innerHTML = new Intl.NumberFormat().format(tienDien) + " VND";
    document.getElementById("vat").innerHTML = new Intl.NumberFormat().format(vat) + " VND";
    document.getElementById("total").innerHTML = new Intl.NumberFormat().format(total) + " VND";
  } else if (dienTieuThu <= 300) {
    tienDien = (dienTieuThu-200) * mucDien4 + mucDien1*50 + mucDien2*50 + mucDien3*100;
    vat = tienDien * 10 /100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 4: ";
    document.getElementById("resultBai7").innerHTML = new Intl.NumberFormat().format(tienDien) + " VND";
    document.getElementById("vat").innerHTML = new Intl.NumberFormat().format(vat) + " VND";
    document.getElementById("total").innerHTML = new Intl.NumberFormat().format(total) + " VND";
  } else if (dienTieuThu <= 400) {
    tienDien = (dienTieuThu-300) * mucDien5 + mucDien1*50 + mucDien2*50 + mucDien3*100+ mucDien4*100;
    vat = tienDien * 10 /100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 5: ";
    document.getElementById("resultBai7").innerHTML = new Intl.NumberFormat().format(tienDien) + " VND";
    document.getElementById("vat").innerHTML = new Intl.NumberFormat().format(vat) + " VND";
    document.getElementById("total").innerHTML = new Intl.NumberFormat().format(total) + " VND";
  } else {
    tienDien = (dienTieuThu-400) * mucDien6 + mucDien1*50 + mucDien2*50 + mucDien3*100+ mucDien4*100+mucDien5*100;
    vat = tienDien * 10 /100;
    total = tienDien + vat;
    document.getElementById("mucDien").innerHTML = "Mức 6: ";
    document.getElementById("resultBai7").innerHTML = new Intl.NumberFormat().format(tienDien) + " VND";
    document.getElementById("vat").innerHTML = new Intl.NumberFormat().format(vat) + " VND";
    document.getElementById("total").innerHTML = new Intl.NumberFormat().format(total) + " VND";
  }
}
