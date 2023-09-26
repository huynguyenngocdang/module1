function primeList() {
  let countMax = parseInt(document.getElementById("inputCount").value);
  let countPrime = 0;
  let thisNumber = 2;
  let text = "";
  while (countPrime < countMax) {
      if (primeCheck(thisNumber)) {
        text += (countPrime + 1) + ". " + thisNumber + "<br/>"
        countPrime += 1;
      }
      thisNumber += 1;
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
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(params); i++) {
      if (params % i == 0) {
        isPrime = false;
        break;
      }
  }
  return isPrime;

}
