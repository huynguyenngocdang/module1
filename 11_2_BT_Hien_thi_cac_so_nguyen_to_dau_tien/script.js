function primeList() {
  let countMax = document.getElementById("inputCount").value;
  let count = 0;
  let text = ""
  let thisNumber = 2;

  while (count < countMax) {
    if (isPrime(thisNumber)) {
      text += (count + 1) + ". " + thisNumber + "<br/>"
      count++;
    } 
    thisNumber++;
  }

  document.getElementById("result").innerHTML = text;
}

function isPrime(value) {
  let isPrime = true;
  if (value < 2) {
    return false;
  } else {
    let i = 2
    while (i <= Math.sqrt(value)) {
        if (value % i == 0) {
          isPrime = false;
          break;
        }
        i++;
    }
  }
    return isPrime 
}
