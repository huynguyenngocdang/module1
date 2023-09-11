let bai1Array = [];
let bai2Array = [];
let bai3Array = [];
let bai4Array = [];
let bai5Array = [];
let bai6Array = [];
let bai7Array = [];
let bai8Array = [];
let bai9ArrayA = [];
let bai9ArrayB = [];
let bai9ArrayC = [];

function getArray(array, min, max, numberCount) {
  let valueRandom;
  for (let index = 0; index < numberCount; index++) {
    valueRandom = getRandomNumber(min, max);
    if (array.indexOf(valueRandom) == -1) {
      array.push(valueRandom);
    } else {
      index--;
    }
  }
}

function evaluateLargest(array) {
  let largestVal, largestIndex, resultString;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      largestIndex = index;
      largestVal = array[index];
    }
  }
  resultString = "Số lớn nhất là " + largestVal + " ở vị trí " + largestIndex;
  return resultString;
}

function bai1GetArray() {
  bai1Array.length = 0;
  let min = document.getElementById("bai1Min").value;
  let max = document.getElementById("bai1Max").value;
  let numberCount = document.getElementById("bai1Amount").value;

  getArray(bai1Array, min, max, numberCount);

  document.getElementById("printBai1Array").innerHTML = bai1Array.sort(
    function (a, b) {
      return a - b;
    }
  );
}

function bai1Larger10() {
  let resultBai1 = "";

  console.log(bai1Array);
  for (let index = 0; index < bai1Array.length; index++) {
    if (bai1Array[index] >= 10) {
      resultBai1 += bai1Array[index] + ",";
    } else {
      resultBai1 += resultBai1;
    }
  }
  console.log("string " + resultBai1);
  resultBai1 = resultBai1.slice(0, -1);
  document.getElementById("printBai1Larger10").innerHTML = resultBai1;
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bai2GetArray() {
  bai2Array.length = 0;
  let min = document.getElementById("bai2Min").value;
  let max = document.getElementById("bai2Max").value;
  let numberCount = document.getElementById("bai2Amount").value;

  getArray(bai2Array, min, max, numberCount);

  document.getElementById("printBai2Array").innerHTML = bai2Array;
}

function bai2Largest() {
  resultBai2 = evaluateLargest(bai2Array);
  document.getElementById("bai2LargestResult").innerHTML = resultBai2;
}

function bai3GetArray() {
  bai3Array.length = 0;
  let min = document.getElementById("bai3Min").value;
  let max = document.getElementById("bai3Max").value;
  let numberCount = document.getElementById("bai3Amount").value;

  getArray(bai3Array, min, max, numberCount);

  document.getElementById("printBai3Array").innerHTML = bai3Array;
}

function bai3Largest() {
  resultBai3 = evaluateLargest(bai3Array);
  let sumTotal = 0;
  let average = 0;

  for (let index = 0; index < bai3Array.length; index++) {
    sumTotal += parseFloat(bai3Array[index]);
  }
  average = (sumTotal / bai3Array.length).toFixed(2);

  document.getElementById("bai3LargestResult").innerHTML =
    resultBai3 + "<br/> Trung bình : " + average;
}

function bai4GetArray() {
  bai4Array.length = 0;
  let min = document.getElementById("bai4Min").value;
  let max = document.getElementById("bai4Max").value;
  let numberCount = document.getElementById("bai4Amount").value;

  getArray(bai4Array, min, max, numberCount);

  document.getElementById("printBai4Array").innerHTML = bai4Array;
}

function bai4Revert() {
  let bai4ReverseArray = [];
  for (let index = bai4Array.length - 1; index >= 0; index--) {
    bai4ReverseArray.push(bai4Array[index]);
  }
  document.getElementById("bai4Revert").innerHTML = bai4ReverseArray;
}

function bai5GetArray() {
  bai5Array.length = 0;
  let min = document.getElementById("bai5Min").value;
  let max = document.getElementById("bai5Max").value;
  let numberCount = document.getElementById("bai5Amount").value;

  getArray(bai5Array, min, max, numberCount);

  document.getElementById("printBai5Array").innerHTML = bai5Array;
}

function bai5CountNegNum() {
  let count = 0;
  for (let index = 0; index < bai5Array.length; index++) {
    if (bai5Array[index] < 0) {
      count++;
    }
  }
  document.getElementById("bai5Result").innerHTML =
    "Số lượng nguyên âm là " + count;
}

function bai6GetArray() {
  bai6Array.length = 0;
  let min = document.getElementById("bai6Min").value;
  let max = document.getElementById("bai6Max").value;
  let numberCount = document.getElementById("bai6Amount").value;

  getArray(bai6Array, min, max, numberCount);

  document.getElementById("printBai6Array").innerHTML = bai6Array;
  document.getElementById("bai6CheckButton").disabled = false;
  document.getElementById("bai6CheckInput").disabled = false;
}

function bai6Check() {
  let numberCheck = parseInt(document.getElementById("bai6CheckInput").value);
  let result = "";

  if (bai6Array.indexOf(numberCheck) == -1) {
    result = "V is not in the array";
  } else {
    result = "V is in the array";
  }
  document.getElementById("bai6Result").innerHTML = result;
}

function bai7GetArray() {
  bai7Array.length = 0;
  let min = document.getElementById("bai7Min").value;
  let max = document.getElementById("bai7Max").value;
  let numberCount = document.getElementById("bai7Amount").value;

  getArray(bai7Array, min, max, numberCount);

  document.getElementById("printBai7Array").innerHTML = bai7Array;
  document.getElementById("bai7CheckButton").disabled = false;
  document.getElementById("bai7CheckInput").disabled = false;
}

function bai7Check() {
  let numberCheck = parseInt(document.getElementById("bai7CheckInput").value);
  let result = "";

  if (bai7Array.indexOf(numberCheck) == -1) {
    result = "V is not in the array";
  } else {
    result = "V is in the array";
    bai7Array.splice(bai7Array.indexOf(numberCheck), 1);
  }
  document.getElementById("printBai7Array").innerHTML = bai7Array;
  document.getElementById("bai7Result").innerHTML = result;
}

function bai8GetArray() {
  bai8Array.length = 0;
  let min = document.getElementById("bai8Min").value;
  let max = document.getElementById("bai8Max").value;
  let numberCount = document.getElementById("bai8Amount").value;

  getArray(bai8Array, min, max, numberCount);

  document.getElementById("printBai8Array").innerHTML = bai8Array;
  document.getElementById("bai8Desc").disabled = false;
  document.getElementById("bai8Asc").disabled = false;
}

function bai8Desc() {
  document.getElementById("printBai8Array").innerHTML = bai8Array.sort(
    (a, b) => b - a
  );
}

function bai8Asc() {
  document.getElementById("printBai8Array").innerHTML = bai8Array.sort(
    (a, b) => a - b
  );
}

function bai9GetArrayA() {
  bai9ArrayA.length = 0;
  let min = document.getElementById("bai9MinA").value;
  let max = document.getElementById("bai9MaxA").value;
  let numberCount = document.getElementById("bai9AmountA").value;

  getArray(bai9ArrayA, min, max, numberCount);

  document.getElementById("printBai9ArrayA").innerHTML = bai9ArrayA;
  checkAB();
}

function bai9GetArrayB() {
  bai9ArrayB.length = 0;
  let min = document.getElementById("bai9MinB").value;
  let max = document.getElementById("bai9MaxB").value;
  let numberCount = document.getElementById("bai9AmountB").value;

  getArray(bai9ArrayB, min, max, numberCount);

  document.getElementById("printBai9ArrayB").innerHTML = bai9ArrayB;
  checkAB();
}

function checkAB() {
  if (bai9ArrayA.length != 0 && bai9ArrayB.length != 0) {
    document.getElementById("bai9GetArrayCButton").disabled = false;
  } else {
    document.getElementById("bai9GetArrayCButton").disabled = true;
  }
}

function bai9GetArrayC() {
  bai9ArrayC = bai9ArrayC.concat(bai9ArrayA, bai9ArrayB);

  document.getElementById("printBai9ArrayC").innerHTML = bai9ArrayC;
}
