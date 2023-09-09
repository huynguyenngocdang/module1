function reset() {
  location.reload(true);
}

function bai1Function() {
  let count = document.getElementById("inputFiboBai1").value;
  let thisValue = 0;
  let nextValue = 1;
  let sum = 0;
  let text = "";

  for (let i = 0; i < count; i++) {
    sum = thisValue + nextValue;
    nextValue = thisValue;
    thisValue = sum;

    text += thisValue + " , ";
  }
  text = String(text).slice(0, -3);

  document.getElementById("resultBai1").innerHTML = count + " số đầu: " + text;
}

function bai2Function() {
  let count = document.getElementById("inputBai2").value;
  let text = "";
  let total = 1;
  for (let i = count; i > 0; i--) {
    text += i + " x ";
    total *= i;
  }
  text = String(text).slice(0, -3);
  document.getElementById("resultBai2").innerHTML = total + " = " + text;
}

function bai3FunctionA() {
  let size = document.getElementById("inputBai3").value;
  let text = "<table>";

  for (let i = 1; i <= size; i++) {
    text += "<tr>";
    for (let j = 1; j <= i; j++) {
      text += "<td>*</td>";
    }
    text += "</tr>";
  }
  text += "</table>";
  document.getElementById("resultBai3A").innerHTML = text;
}

function bai3FunctionB() {
  let size = document.getElementById("inputBai3").value;
  let text = "<table>";

  for (let i = size; i >= 0; i--) {
    text += "<tr>";
    for (let j = 1; j <= i; j++) {
      text += "<td>*</td>";
    }
    text += "</tr>";
  }
  text += "</table>";
  document.getElementById("resultBai3B").innerHTML = text;
}

function bai3FunctionC() {
  let n = document.getElementById("inputBai3").value;
  let text = "<table>";
  for (let i = 1; i <= n; i++) {
    text += "<tr>";
    for (let j = 0; j < n - i; j++) {
      text += "<td>&nbsp;</td>";
    }
    // printing star
    for (let k = 0; k < i; k++) {
      text += "<td>*</td>";
    }
    text += "</tr>";
  }
  text += "</table>";
  console.log(text);
  document.getElementById("resultBai3C").innerHTML = text;
}

function bai3FunctionD() {
  let size = document.getElementById("inputBai3").value;
  let text = "<table>";

  for (let i = size; i >= 0; i--) {
    text += "<tr>";
    for (let k = 0; k < size - i; k++) {
      text += "<td>&nbsp;</td>";
    }
    for (let j = 1; j <= i; j++) {
      text += "<td>*</td>";
    }
    //   text += "<br/>";

    text += "</tr>";
  }
  text += "</table>";
  document.getElementById("resultBai3D").innerHTML = text;
}

function bai4Function() {
  let count = document.getElementById("inputBai4").value;
  let text = "<table>";

  for (let i = 1; i <= count; i++) {
    text += "<tr>";
    for (let k = 1; k <= count; k++) {
      if (i == 1 || i == count) {
        text += "<td>*</td>";
      } else {
        if (k == 1 || k == count) {
          text += "<td>*</td>";
        } else {
          text += "<td>&nbsp;</td>";
        }
      }
    }
    text += "</tr>";
  }
  text += "</table>";
  console.log(text);
  document.getElementById("resultBai4").innerHTML = text;
}

function bai5Function() {
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
    text += "Tháng thứ " + index + ": " + remainingBalanceFormatted + "<br>";
  }
  document.getElementById("lichTraNo").innerHTML = text;
}

function bai6Function() {
  var count = document.getElementById("inputBai6").value;
  var text = "<table>";
  for (let i = count / 2; i < count; i += 2) {
    // print first spaces
    text += "<tr>";
    for (let j = 1; j < count - i; j += 2) {
      text += "<td>&nbsp;</td>";
    }
    // print first stars
    for (let j = 1; j < i + 1; j++) {
      text += "<td>*</td>";
    }
    // print second spaces
    for (let j = 1; j < count - i + 1; j++) {
      text += "<td>&nbsp;</td>";
    }
    // print second stars
    for (let j = 1; j < i + 1; j++) {
      text += "<td>*</td>";
    }
    text += "</tr>";
  }
  // lower part
  // inverted pyramid
  text += "<tr>";
  for (let i = count; i > 0; i--) {
    for (let j = 0; j < count - i; j++) {
      text += "<td>&nbsp;</td>";
    }
    for (let j = 1; j < i * 2; j++) {
      text += "<td>*</td>";
    }
    text += "</tr>";
  }
  text += "</table>";
  document.getElementById("resultBai6").innerHTML = text;
}
