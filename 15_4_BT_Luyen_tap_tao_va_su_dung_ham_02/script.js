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
