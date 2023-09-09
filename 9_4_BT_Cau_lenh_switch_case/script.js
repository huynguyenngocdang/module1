function check() {
  let month = document.getElementById("idMonth").value;
  let year = document.getElementById("idYear").value;
  let result = new Date(year, month, 0).getDate();
  document.getElementById("resultPrint").innerHTML = 
  "Tháng " + month + " năm " + year + " có " + result + " ngày";
}
