function check() {
    let input = document.getElementById("idResult").value;
    if (input == 'ECMAScript') {
        document.getElementById("resultPrint").innerHTML = "Right";
    } else {
        document.getElementById("resultPrint").innerHTML = "Didn’t know? ECMAScript!"
    }
}