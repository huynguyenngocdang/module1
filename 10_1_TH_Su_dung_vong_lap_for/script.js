function bai1Function() {
  let i;
  let text = "";
  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
  document.getElementById("resultBai1").innerHTML = text;
}

function bai2Function() {
  let inputNumber = document.getElementById("inputNumber").value;
  let total = 0;
  let text = "";
  if (inputNumber>=0) {
        for (let i = 0; i <= inputNumber; i++) {
        total += i;
        text += i + " + "
      }
      document.getElementById("resultBai2").innerHTML =  total+" = " +text;
  } else {
    document.getElementById("resultBai2").innerHTML = "Input must greater than 0";
  }
  
}
