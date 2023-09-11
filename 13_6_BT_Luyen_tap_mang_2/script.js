// bắt đầu bài 1
let arrayBai1 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
let stringBai1Example = "[";
for (let i in arrayBai1) {
  stringBai1Example += "[";
  for (let j in arrayBai1[i]) {
    stringBai1Example += arrayBai1[i][j] + ",";
  }
  stringBai1Example += "]," + "<br/>";
}
stringBai1Example += "];";
document.getElementById("arrayBai1").innerHTML = stringBai1Example;
function bai1Function() {
  let resultBai1 = "";
  for (var i in arrayBai1) {
    resultBai1 += "Row" + i + "<br/>";
    for (const j in arrayBai1[i]) {
      resultBai1 += arrayBai1[i][j] + "<br/>";
    }
  }
  document.getElementById("resultBai1").innerHTML = resultBai1;
}

// bắt đầu bài 2
let arrayBai2 = [];

function bai2ToArray() {
  let bai2Input = document.getElementById("inputBai2").value;
  arrayBai2 = Array.from(bai2Input);

  let stringBai2ToArray = "[";
  for (i in arrayBai2) {
    stringBai2ToArray += arrayBai2[i] + ",";
  }
  stringBai2ToArray = stringBai2ToArray.slice(0, -1);
  stringBai2ToArray += "]";
  document.getElementById("bai2ToArray").innerHTML = stringBai2ToArray;
  document.getElementById("bai2ReverseButton").disabled = false;
}

function bai2Reverse() {
  let arrayBai2Reverse = [];
  console.log(arrayBai2);
  arrayReverse(arrayBai2, arrayBai2Reverse);
  document.getElementById("bai2Reverse").innerHTML = arrayBai2Reverse.join("");
}

function bai2ReverseQuick() {
  let arrayBai2Reverse = [];
  arrayBai2 = Array.from(document.getElementById("inputBai2").value);
  arrayReverse(arrayBai2, arrayBai2Reverse);
  document.getElementById("inputBai2").value = arrayBai2Reverse.join("");
}


function arrayReverse(array, arrayReverse) {
  for (let index = array.length - 1; index >= 0; index--) {
    arrayReverse.push(array[index]);
  }
}

// bắt đầu bài 3
function bai3Function() {
  let inputBai3Text = Array.from(
    document.getElementById("inputBai3Text").value
  );
  let inputBai3Size = document.getElementById("inputBai3Size").value;

  let arrayBai3Defined = [];
  let count = 0;
  for (let index = 0; index < inputBai3Size; index++) {
    arrayBai3Defined.push(inputBai3Text[index]);
  }

  for (let index = 0; index < arrayBai3Defined.length; index++) {
    if (isNumeric(arrayBai3Defined[index])) {
      count += 1;
    }
  }
  console.log(arrayBai3Defined);
  document.getElementById("resultBai3").innerHTML =
    "Input với mảng size = " + inputBai3Size + " có " + count + " số";
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function bai4Function() {
  let arrayBai4 = Array.from(document.getElementById("inputBai4").value);
  let count = 0;
  for (let index = 0; index < arrayBai4.length; index++) {
    if (isNumeric(arrayBai4[index])) {
    } else {
      count += 1;
    }
    document.getElementById("bai4Result").innerHTML =
      "Chuỗi trên có " + count + " từ";
  }
}

function bai5Function() {
  let inputStringA = document.getElementById("inputBai5A").value.toString();
  let inputStringB = document.getElementById("inputBai5B").value.toString();
  let inputBai5A = [];
  let inputBai5B = [];
  inputBai5A = inputStringA.split(",").map(function (item) {
    return item.trim();
  });
  inputBai5B = inputStringB.split(",").map(function (item) {
    return item.trim();
  });
  let resultBai5 = "";
  for (let i in inputBai5A) {
    for (let j in inputBai5B) {
      if (inputBai5B[j] == inputBai5A[i]) {
        resultBai5 +=
          "Dãy A tại vị trí " + i + " giống dãy B tại vị trí " + j + "<br/>";
      }
    }
  }
  if (resultBai5 == "") {
    resultBai5 = "2 dãy hoàn toàn khác nhau";
  }
  console.log(inputBai5A);
  console.log(inputBai5B);
  console.log(resultBai5);
  document.getElementById("resultBai5").innerHTML = resultBai5;
}

function bai6Function() {
  let bai6Array = Array.from(document.getElementById("inputBai6").value);
  let findCharacter = document.getElementById("findBai6").value;
  let replaceCharacter = document.getElementById("replaceBai6").value;
  for (let index = 0; index < bai6Array.length; index++) {
    if (bai6Array[index] == findCharacter) {
      bai6Array[index] = replaceCharacter;
    }
  }
  document.getElementById("inputBai6").value = bai6Array.join("");
}
