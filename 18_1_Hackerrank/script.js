function compareTriplets(a, b) {
  let score = [0, 0];
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      score[0] += 1;
    } else if (b[i] > a[i]) {
      score[1] += 1;
    } else {
    }
  }

  return score;
}

function calculate() {
  let a = [5, 6, 7];
  let b = [3, 6, 10];
  let result = compareTriplets(a, b);
  console.log(result);
}
