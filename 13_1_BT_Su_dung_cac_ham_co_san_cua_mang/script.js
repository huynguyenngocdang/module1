var arrayBai1 = [];

function bai1AddToArray() {
  arrayBai1.push(document.getElementById("inputBai1").value);
  document.getElementById("resultBai1Input").innerHTML = arrayBai1;
  document.getElementById("inputBai1").value = "";
}

function resetArray(array) {
  array.length = 0;
  document.getElementById("resultBai1Input").innerHTML = array;
  return array;
}

function convert1(array) {
  document.getElementById("resultBai1ConvertString").innerHTML =
    "<br/>" +
    array.toString() +
    "<br/>" +
    array.join() +
    "<br/>" +
    array.join("+");
}

function bai2Convert() {
  let arrayBai2 = Array.from(document.getElementById("inputBai2").value);
  let text = "";

  for (let index = 0; index < arrayBai2.length; index++) {
    if (arrayBai2[index] % 2 == 0 && arrayBai2[index + 1] % 2 == 0) {
      arrayBai2.splice(index + 1, 0, "-");
    }
    text += arrayBai2[index];
  }

  document.getElementById("resultBai2Convert").innerHTML = text;
}

function bai3Convert() {
  let inputArray = Array.from(document.getElementById("inputBai3").value);
  let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let LOWER = "abcdefghijklmnopqrstuvwxyz";
  let newArray = [];

  for (let index = 0; index < inputArray.length; index++) {
    if (UPPER.indexOf(inputArray[index]) != -1) {
      newArray.push(inputArray[index].toLowerCase());
    } else if (LOWER.indexOf(inputArray[index]) != -1) {
      newArray.push(inputArray[index].toUpperCase());
    } else {
      newArray.push(inputArray[index]);
    }
  }
  document.getElementById("resultBai3Convert").innerHTML = newArray.join("");
}
