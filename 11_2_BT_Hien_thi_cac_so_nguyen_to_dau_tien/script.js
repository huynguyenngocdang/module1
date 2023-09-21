function primeList() {
  let countMax = document.getElementById("inputCount").value;
  let count = 0;
  let text = ""
  let N = 2;
  while (count < countMax) {
    let countUoc = 0;
    for (let i = 2; i < N; i++) {
      if (N % i === 0) {
        countUoc++;
      }
    }
    if (countUoc == 0) {
      text += "Number " + (count + 1) + " is " + N + "<br>";
      count++;
    }
    N++;
  }

  document.getElementById("result").innerHTML = text;
}
