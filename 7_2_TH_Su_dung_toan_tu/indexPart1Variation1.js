let buttonPressed = document.getElementById('bCalculated');
buttonPressed.addEventListener("click", calculateArea)
function calculateArea() {
    let width = document.getElementById("inputWidth").value;
    let height = document.getElementById("inputHeight");
    let area = width * height;
    document.getElementById("areaCalculated").innerHTML = area;

}