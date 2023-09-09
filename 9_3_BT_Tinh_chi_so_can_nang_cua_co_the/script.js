function getWeight() {
  let inputWeight = document.getElementById("idWeight").value;
  return inputWeight;
}

function getHeight() {
  let inputHeight = document.getElementById("idHeight").value;
  return inputHeight;
}

function calculateBmi() {
  let weight = getWeight();
  let height = getHeight();
  let bmi = (weight / (height ^ 2));
  console.log(bmi);

  switch (true) {
    case bmi >= 30:
      document.getElementById("resultPrint").innerHTML = "Obese";

      break;
    case (bmi >= 25 && bmi < 30):
      document.getElementById("resultPrint").innerHTML = "Overweight";

      break;

    case (bmi >= 18.5 && bmi <25):
      document.getElementById("resultPrint").innerHTML = "Normal";

      break;
    case bmi < 18.5:
      document.getElementById("resultPrint").innerHTML = "Underweight";

      break;

    default:
        document.getElementById("resultPrint").innerHTM = "Something wrong";
      break;
  }
}
