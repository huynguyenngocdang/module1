function findSmallest() {
  let inputString = document.getElementById("inputArray").value.toString();
  let arrayFind = [];

  arrayFind = inputString.split(",").map(function (item) {
    return item.trim();
  });
  console.log(arrayFind);

  let result = minArray(arrayFind);
  if (parseFloat(arrayFind.length) == 0 || isNaN(result)) {
    result = "The array is empty";
  } else {
    result = result;
  }

  document.getElementById("resultSmallest").innerHTML = result;
}

function minArray(arrayInput) {
    console.log(arrayInput.length );
  if (arrayInput.length == 0) {
    return -1;
  } else {

      let min = parseFloat(arrayInput[0]);
      for (let index = 0; index < arrayInput.length; index++) {
        if (parseFloat(arrayInput[index]) < min) {
          min = parseFloat(arrayInput[index]);
        }
      }
      return min;
  }

}
