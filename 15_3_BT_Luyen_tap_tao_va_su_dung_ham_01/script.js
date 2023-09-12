function bai1Function() {
  alert(document.getElementById("bai1Input").value);
}

function bai2Function() {
  let bai2Input = parseFloat(document.getElementById("bai2Input").value);
  bai2Input += 1;
  document.getElementById("bai2Input").value = bai2Input;
}

function bai3Function() {
  let a = parseFloat(document.getElementById("inputBai3A").value);
  let b = parseFloat(document.getElementById("inputBai3B").value);
  let sum = (a, b) => a + b;
  // if (a > b) {
  //     alert("A > B");
  // } else {
  //     alert(sum(a,b));
  // }

  a > b ? alert("A > B") : alert(sum(a, b));

  document.getElementById("inputBai3A").value = "";
  document.getElementById("inputBai3B").value = "";
}

function alertSecond() {
  let a = parseFloat(document.getElementById("bai4FirstNum").value);
  let b = parseFloat(document.getElementById("bai4SecondNum").value);
  let sum = (a, b) => a + b;
  alert("result = " + sum(a, b));
}

let arrayHoroscope = [
  "Ursa Minor",
  "Tarurus",
  "Cygnus",
  "Lyra",
  "Aquila",
  "Ursa Major",
  "Leo",
];
let arrayStar = [
  "Polaris",
  "Aldebaran",
  "Deneb",
  "Vega",
  "Altair",
  "Dubhe",
  "Regulus",
];
function bai5Function() {
  let findStar = document.getElementById("findStar").value;
  let result = "";
  result = checkStart(arrayHoroscope, arrayStar, findStar);

  alert(result);
}

function checkStart(arrayHoroscope, arrayStar, findStar) {
  let result = "";
  if (arrayHoroscope.indexOf(findStar) != -1) {
    result =
      "Chòm sao " +
      findStar +
      " có ngôi sao " +
      arrayStar[arrayHoroscope.indexOf(findStar)];
  } else if (arrayStar.indexOf(findStar) != -1) {
    result =
      "Ngôi sao " +
      findStar +
      " thuộc chòm sao " +
      arrayHoroscope[arrayStar.indexOf(findStar)];
  } else {
    result = "Không tìm thấy ngôi sao/chòm sao!";
  }
  return result;
}
