function primeList() {
  let countMax = document.getElementById("inputCount").value;
  let countUoc = 0;
  let countSNT = 0;
  let text = "";
  for (let i = 2; i < 1000000; i++) {
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
