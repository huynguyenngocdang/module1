function square(params) {
  return params * params;
}

function bai1Function() {
  let inputBai1 = parseFloat(document.getElementById("inputBai1").value);
  let resultBai1;
  resultBai1 = square(inputBai1);
  document.getElementById("inputBai1").value = resultBai1;
}

let outputBanKinh = document.getElementById("inputBai2R");
let outputduongKinh = document.getElementById("inputBai2D");
let outputChuVi = document.getElementById("inputBai2ChuVi");
let outputDienTich = document.getElementById("inputBai2DienTich");

function bai2Function(valueInput, id) {
  let banKinh = 0;
  let duongKinh = 0;
  let dienTich = 0;
  let chuVi = 0;

  if (id == "inputBai2R") {
    banKinh = valueInput;
    outputduongKinh.value = tinhDuongKinh(banKinh);
    outputChuVi.value = tinhChuvi(banKinh);
    outputDienTich.value = tinhDienTich(banKinh);
  } else if (id == "inputBai2D") {
    duongKinh = valueInput;
    banKinh = tinhBanKinhTuDuongKinh(duongKinh);
    outputBanKinh.value = banKinh;
    outputChuVi.value = tinhChuvi(banKinh);
    outputDienTich.value = tinhDienTich(banKinh);
  } else if (id == "inputBai2ChuVi") {
    chuVi = valueInput;
    banKinh = tinhBanKinhTuChuVi(chuVi);
    outputBanKinh.value = banKinh;
    outputduongKinh.value = tinhDuongKinh(banKinh);
    outputDienTich.value = tinhDienTich(banKinh);
  } else if (id == "inputBai2DienTich") {
    dienTich = valueInput;
    banKinh = tinhBanKinhTuDienTich(dienTich);
    outputBanKinh.value = banKinh;
    outputduongKinh.value = tinhDuongKinh(banKinh);
    outputChuVi.value = tinhChuvi(banKinh);
  }

  console.log("outputBanKinh.value" + outputBanKinh.value);
}

function tinhBanKinhTuDuongKinh(d) {
  return (d / 2).toFixed(2);
}

function tinhBanKinhTuChuVi(C) {
  return (C / (2 * Math.PI)).toFixed(2);
}

function tinhBanKinhTuDienTich(D) {
  return Math.sqrt(D / Math.PI).toFixed(2);
}

function tinhDuongKinh(r) {
  return r * 2;
}

function tinhChuvi(r) {
  return (r * 2 * Math.PI).toFixed(2);
}

function tinhDienTich(r) {
  return (Math.PI * Math.pow(r, 2)).toFixed(2);
}

function bai3Function(inputValue) {
  let text = "";
  text = inputValue + "! =";
  let result;
  document.getElementById("resultBai3Header").innerHTML = text;
  result = tinhGiaiThua(inputValue);
  document.getElementById("resultBai3").innerHTML = result;
}

function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

function tinhGiaiThua(value) {
  let thisVal = 1;
  for (let index = 1; index <= value; index++) {
    thisVal *= index;
  }
  return thisVal;
}

function bai4Function(value) {
  let result = document.getElementById("resultBai4")

  if (isNumber(value)) {
    result.innerHTML = "TRUE";
  } else {
    result.innerHTML = "FALSE";
  }
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

function bai5Function() {
  let a = document.getElementById("inputBai5A").value;
  let b = document.getElementById("inputBai5B").value;
  let c = document.getElementById("inputBai5C").value;
  let result = checkSmallest(a, b, c);
  document.getElementById("resultBai5").innerHTML = result;
}

function checkSmallest(a, b, c) {
  let result = "";
   if (a < b) {
      if (a < c) {
        result = "A is smallest";
      } else {
        result = "C is smallest" ;
      }
   } else if(b < c) {
      result = "B is smallest";
   } else {
    result = "C is smallest";
   }

   return result;
}

function bai6Function(value) {
  let result = ""
  if (checkLarger0(value) && checkWholeNumber(value)) {
    result = "Đây là số nguyên dương"
  } else {
    result = "Đây không phải số nguyên dương"
  }
  document.getElementById("resultBai6").innerHTML = result;
}

function checkWholeNumber(value) {
  let isWhole = (value - Math.floor(value) == 0);
  if (isWhole) {
    return true;
  } else {
    return false;
  }
}

function checkLarger0(value) {
  return value > 0;
}

function bai7Function() {
  let a = document.getElementById("inputBai7A").value;
  let b = document.getElementById("inputBai7B").value;
  let temp;
  temp = a;
  a = b;
  b = temp;
  document.getElementById("inputBai7A").value = a;
  document.getElementById("inputBai7B").value = b;
}

function bai8Function() {
  let stringInput = document.getElementById("inputBai8").value.toString();
  let arrayBai8 = [];
  let arrayReverse = [];

  arrayBai8 = stringInput.split(",").map(function (item) {
    return item.trim();
  });

  for (let index = arrayBai8.length-1 ; index >= 0; index--) {
    arrayReverse.push(arrayBai8[index]);
    
  }
  document.getElementById("inputBai8").value = arrayReverse;
}

function bai9Function() {
  let stringInput = document.getElementById("inputBai9Array").value.toString();
  let searchInput = document.getElementById("inputBai9Char").value;
  let arrayBai9 = [];
  let count = 0;
  arrayBai9 = stringInput.split(",").map(function (item) { return item.trim()});

  for (let i = 0; i < arrayBai9.length; i++) {
    if (arrayBai9[i].length > 0) {
        for (let j = 0; j < arrayBai9[i].length; j++) {
          if(arrayBai9[i].charAt(j) == searchInput)
          count += 1;
        }
    } 
    
  }
  if (count > 0) {
    document.getElementById("resultBai9").innerHTML = count;
  } else {
    document.getElementById("resultBai9").innerHTML = "-1";
  }
}