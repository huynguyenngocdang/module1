let inputBtn = document.getElementById("idBtn");

inputBtn.addEventListener("click", check);

// get username
function getInputUsername() {
  let inputUsername = document.getElementById("idUsername").value;
  return inputUsername;
}

// get Password
function getInputPwd() {
  let inputPwd = document.getElementById("idPwd").value;
  return inputPwd;
}

// validation
function check() {
    // let inputUsername = abc => {document.getElementById("idUsername").value};
    let inputUsername = getInputUsername();
    let inputPwd = getInputPwd();
    console.log (inputUsername);
    console.log(inputPwd);

    if (inputUsername == 'Admin') {
        if (inputPwd == 'TheMaster') {
            document.getElementById("resultPrint").innerHTML = 'Welcome';
        } else if (inputPwd == null) {
            document.getElementById("resultPrint").innerHTML = 'Canceled';
        } else {
            document.getElementById("resultPrint").innerHTML = 'Wrong password';
        }
    } else if (inputUsername == null) {
        document.getElementById("resultPrint").innerHTML = 'Canceled';
    } else {
        document.getElementById("resultPrint").innerHTML = 'I don&apos;t know you';
    }
}
