let x = 0;
let array = Array();

function add() {
    array[x] = document.getElementById("input").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("input").value = "";
}

function display() {
    let result = "";
    for (let index = 0; index < array.length; index++) {
        result += "Element " + index + " = " + array[index] + "<br/>"
        
    }
    document.getElementById("result").innerHTML = result;
}