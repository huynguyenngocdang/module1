let view = document.getElementById("idView");

function inputValue(value) {
  view.value += value;
}

function result() {
  let result = eval(view.value);
  view.value = result;
  
}

function pageClear() {
  view.value = "";
  location.reload()
}
