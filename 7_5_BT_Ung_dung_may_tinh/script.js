let addBtnPressed = document.getElementById("add");
let subBtnPressed = document.getElementById("sub");
let mulBtnPressed = document.getElementById("mul");
let divBtnPressed = document.getElementById("div");

addBtnPressed.addEventListener("click", addFunction);
subBtnPressed.addEventListener("click", subFunction);
mulBtnPressed.addEventListener("click", mulFunction);
divBtnPressed.addEventListener("click", divFunction);

function addFunction() {
  let a = document.getElementById("idInputA").value;
  let b = document.getElementById("idInputB").value;
  let result = a + b;
  document.getElementById("resultPrint").innerHTML = result;
}
function subFunction() {
  let a = document.getElementById("idInputA").value;
  let b = document.getElementById("idInputB").value;
  let result = a - b;
  document.getElementById("resultPrint").innerHTML = result;
}

function mulFunction() {
  let a = document.getElementById("idInputA").value;
  let b = document.getElementById("idInputB").value;
  let result = a * b;
  document.getElementById("resultPrint").innerHTML = result;
}

function divFunction() {
  let a = test();
  let b = document.getElementById("idInputB").value;
  let result = a / b;
  document.getElementById("resultPrint").innerHTML = result;
}
function test() {
  let a = document.getElementById("idInputA").value;
  return a;
}

let view = document.getElementById("idView");

function inputValue(value) {
  view.value += value;
}

function result() {
  let result = eval(view.value);
  view.value = result;
  
}

function pageClear() {
  view.value = "";
  location.reload()
}
