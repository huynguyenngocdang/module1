const leapYear = "Năm nhuận";
const normYear = "Năm thường";
let btn = document.getElementById("btn");
btn.addEventListener("click", checkYear);
function checkYear() {
  let yearInput = document.getElementById("idYear").value;

  if (yearInput % 4 == 0) {
    if (yearInput % 100 == 0) {
      if (yearInput % 400 == 0) {
        document.getElementById("printResult").innerHTML = leapYear;
        console.log(leapYear);
      } else {
        document.getElementById("printResult").innerHTML = normYear;
      }
    } else {
      document.getElementById("printResult").innerHTML = leapYear;
    }
  } else {
    document.getElementById("printResult").innerHTML = normYear;
  }
}

