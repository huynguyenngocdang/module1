// Include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

function getResults() {
  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then(displayResults);
}

function displayResults(currency) {
  let currencyFromType = document.getElementById("idFrom").value;
  let currencyToType = document.getElementById("idTo").value;
  let valueInput = document.getElementById("idInput").value;
  let fromRate = currency.rates[currencyFromType];
  let toRate = currency.rates[currencyToType];
  let calculateResult = (valueInput * (toRate / fromRate)).toFixed(2);
  let resultDisplay = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(calculateResult);
  document.getElementById("resultPrint").innerHTML = resultDisplay;
}

function reset() {
	window.location.reload();
	
};
