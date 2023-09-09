let bai1ButtonPressed = document.getElementById("bai1Button");
bai1ButtonPressed.addEventListener("click", fBai1Calculate);
function fBai1Calculate() {
  let nLy = parseFloat(document.getElementById("iDiemLy").value);
  let nHoa = parseFloat(document.getElementById("iDiemHoa").value);
  let nSinh = parseFloat(document.getElementById("iDiemSinh").value);
  let tongDiem = nLy + nHoa + nSinh;
  const tongSoMon = 3;
  let trungBinh = tongDiem / tongSoMon;
  document.getElementById("totalBai1").innerHTML = tongDiem;
  document.getElementById("averageBai1").innerHTML = trungBinh;
}

let bai2ButtonPressed = document.getElementById("bai2Button");
bai2ButtonPressed.addEventListener("click", fBai2Calculate);
function fBai2Calculate() {
  let nDoCInput = parseFloat(document.getElementById("iDoC").value);
  let nDoFOutput = (nDoCInput * 9) / 5 + 32;
  document.getElementById("doFBai2").innerHTML = nDoFOutput;
}

let bai3ButtonPressed = document.getElementById("bai3Button");
bai3ButtonPressed.addEventListener("click", fBai3Calculate);
function fBai3Calculate() {
  let r = parseFloat(document.getElementById("iBanKinh").value);
  let inputMetric = document.getElementById("metric").value;
  let rConvert, chuViPrintCm, dienTichPrintCm, chuViPrintM, dienTichPrintM;
  let chuVi = (2 * Math.PI * r).toFixed(2);
  let dienTich = (r ** 2 * Math.PI).toFixed(2);
    if (inputMetric == 'cm'){
        chuViPrintCm = chuVi;
        dienTichPrintCm = dienTich;
    } else {
        chuViPrintCm = (chuVi * 100).toFixed(2) ;
        dienTichPrintCm = (dienTich * 10000).toFixed(2);
    }
    chuViPrintM = (chuViPrintCm / 100).toFixed(2);
    dienTichPrintM = (dienTichPrintCm / 10000).toFixed(2);

  document.getElementById("resultChuVi").innerHTML = chuViPrintCm + 'cm or ' + chuViPrintM + ' m';
  document.getElementById("resultDienTich").innerHTML = dienTichPrintCm + 'cm&#178; or ' + dienTichPrintM + ' m&#178;';
  
}
