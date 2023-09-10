let board = [];
let statusThis = 1;
for (let i = 0; i < 5; i++) {
  board[i] = new Array("(.)", "(.)", "(.)", "(.)", "(.)");
}

function displayCaro() {
  let data = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      data += board[i][j] + "&nbsp; &nbsp; &nbsp; &nbsp;";
    }
    data += "<br>";
  }

  document.getElementById("caro").innerHTML = data;
}

function checkStatus() {
  if (statusThis % 2 == 0) {
    document.getElementById("x1").disabled = true;
    document.getElementById("y1").disabled = true;
    document.getElementById("x2").disabled = false;
    document.getElementById("y2").disabled = false;
  } else {
    document.getElementById("x2").disabled = true;
    document.getElementById("y2").disabled = true;
    document.getElementById("x1").disabled = false;
    document.getElementById("y1").disabled = false;
  }
}
// initial first load
displayCaro();
checkStatus();
function setX() {
  let xX = document.getElementById("x1").value;
  let yX = document.getElementById("y1").value;

  board[xX][yX] = "x";
  statusThis++;
  checkStatus();
  displayCaro();
  document.getElementById("x1").value = "";
  document.getElementById("y1").value = "";
  checkWin()
}

function setO() {
  let xY = document.getElementById("x2").value;
  let yY = document.getElementById("y2").value;
  board[xY][yY] = "o";
  statusThis++;
  checkStatus();
  displayCaro();
  document.getElementById("x2").value = "";
  document.getElementById("y2").value = "";
  checkWin()
}

function checkWin() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (
        (board[i][j] == "x" &&
          board[i][j + 1] == "x" &&
          board[i][j + 2] == "x") ||
        (board[i][j] == "x" &&
          board[i + 1][j] == "x" &&
          board[i + 2][j] == "x") ||
        (board[i][j] == "x" &&
          board[i + 1][j + 1] == "x" &&
          board[i + 2][j + 2] == "x")
      ) {
        alert("X THẮNG");
        document.getElementById("x2").disabled = true;
        document.getElementById("y2").disabled = true;
        document.getElementById("x1").disabled = true;
        document.getElementById("y1").disabled = true;
        document.getElementById("winStatus").innerHTML = "X THẮNG";
      } else if (
        (board[i][j] == "o" &&
          board[i][j + 1] == "o" &&
          board[i][j + 2] == "o") ||
        (board[i][j] == "o" &&
          board[i + 1][j] == "o" &&
          board[i + 2][j] == "o") ||
        (board[i][j] == "o" &&
          board[i + 1][j + 1] == "o" &&
          board[i + 2][j + 2] == "o")
      ) {
        alert("O THẮNG");
        document.getElementById("x2").disabled = true;
        document.getElementById("y2").disabled = true;
        document.getElementById("x1").disabled = true;
        document.getElementById("y1").disabled = true;
        document.getElementById("winStatus").innerHTML = "O THẮNG";
      }
    }
  }
}
