function primeList() {
  let countMax = parseInt(document.getElementById("inputCount").value);
  let countUoc = 0;
  let countSNT = 0;
  let text = "";
  for (let i = 2; i < 10000; i++) {
    if (countSNT < countMax) {
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          countUoc += 1;
        }
      }
      if (countUoc == 2) {
        countSNT += 1;
        text += i + "<br>";
      }
      countUoc = 0;
    } else {
      break;
    }
  }

  document.getElementById("result").innerHTML = text;
}

function primeResult() {
  let inputNumber = parseInt(document.getElementById("inputCheck").value);
  result = "";
  if (primeCheck(inputNumber)) {
    result = inputNumber+ " is Prime number"
  } else {
    result = inputNumber+ " is <b>NOT</b> Prime number"
  }

  document.getElementById("resultPrime").innerHTML = result;
}

function primeCheck(params) {
  let countUoc = 0;
  for (let i = 1; i <= params; i++) {
      if (params % i == 0) {
        countUoc += 1;
      }
  }
  if (countUoc == 2) {
    return true;
  } else {
    return false;
  }

}
