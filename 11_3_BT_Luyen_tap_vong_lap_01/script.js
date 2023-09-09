function reset() {
  location.reload(true);
}

function bai1Function() {
  let text = "";
  let i = 1;
  while (i < 100) {
    text += i + "<br>";
    i += 1;
  }

  document.getElementById("resultBai1").innerHTML = text;
  alert("Hoàn thành");
}

function bai2Function() {
  let temp = parseInt(prompt("Nhập nhiệt độ"));
  while (temp > 100) {
    alert("giảm nhiệt độ");
    temp = parseInt(prompt("Nhập nhiệt độ"));
  }
  while (temp < 20) {
    alert("Tăng nhiệt độ");
    temp = parseInt(prompt("Nhập nhiệt độ"));
  }
}

function bai3Function() {
  let count = document.getElementById("inputFiboBai3").value;
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

  document.getElementById("resultBai3").innerHTML = count + " số đầu: " + text;
}

function bai4Function() {
  let count = document.getElementById("inputFiboBai4").value;
  let thisValue = 0;
  let nextValue = 1;
  let sum = 0;
  let text = "";
  let listChia5 = "";

  for (let i = 0; i < count; i++) {
    sum = thisValue + nextValue;
    nextValue = thisValue;
    thisValue = sum;

    text += thisValue + " , ";
    if (thisValue % 5 == 0) {
      listChia5 += thisValue + " , ";
    }
  }
  text = String(text).slice(0, -3);
  listChia5 = String(listChia5).slice(0, -3);
  document.getElementById("resultBai4").innerHTML =
    "Liệt kê " + count+ " số: " + text + "<br/> Các số chia hết cho 5: " + listChia5;
}

function bai5Function() {
  let count = document.getElementById("inputFiboBai5").value;
  let thisValue = 0;
  let nextValue = 1;
  let sum = 0;
  let sumTotal = 0;
  let text = "";

  for (let i = 0; i < count; i++) {
    sum = thisValue + nextValue;
    nextValue = thisValue;
    thisValue = sum;
    sumTotal += sum; 
    text += thisValue + " + ";
  }
  text = String(text).slice(0, -3);

  document.getElementById("resultBai5").innerHTML = sumTotal + " = " + text;
}

function bai6Function() {
  let count = document.getElementById("inputBai6").value;
  let sum = 0;
  let text = "";
  for (let i = 1; i <= count; i++) {
    if (i % 7 == 0) {
      sum += i;
      text += i + " + ";
    }
  }
  text = String(text).slice(0, -3);
  document.getElementById("resultBai6").innerHTML = sum + " = " + text;
}

function bai7Function() {
  let count = document.getElementById("inputBai7").value;
  let text = "";
  for (let i = 1; i <= count; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        text += "FizzBuzz <br/>";
      } else {
        text += "Fizz <br/>";
      }
    } else if (i % 5 == 0) {
      text += "Buzz <br/>";
    } else {
      text += i + "<br/>";
    }
  }
  document.getElementById("resultBai7").innerHTML = text;
}

function bai8Function() {
  let range = parseInt(prompt("Nhập khoảng số"));
  let random = Math.floor(Math.random() * (range + 1));

  for (let index = 0; index < 3; index++) {
    let guess = parseInt(prompt("Hãy đoán số:"));
    if (guess == random) {
      alert("Bạn đoán đúng rồi");
      break;
    }
  }
}
