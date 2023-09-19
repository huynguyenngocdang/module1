let rowInput = document.getElementById("inputRow");
let columnInput = document.getElementById("inputCol");
const DEFAULT_CELL_SIZE = 40;

class Table {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.text = "";
  }
  create() {
    for (let i = 0; i < this.row; i++) {
      var top = i * DEFAULT_CELL_SIZE;
      for (let j = 0; j < this.column; j++) {
        var left = j * DEFAULT_CELL_SIZE;
        this.text += `<div id="row${i}col${j}" onclick="check(${i}, ${j})"
        style="position: absolute;
        width: ${DEFAULT_CELL_SIZE}px;
        height:  ${DEFAULT_CELL_SIZE}px;
        left: ${left}px;
        top: ${top + 120}px;
        line-height: ${DEFAULT_CELL_SIZE}px;
        text-align: center;
        font-size:20pt;
        color: red;"
        
        > </div>`;
      }
    }
  }
}
let newTable = new Table(0, 0);

function createTable() {
  newTable = new Table(rowInput.value, columnInput.value);
  newTable.create();
  document.getElementById("tableCreate").innerHTML = newTable.text;
}

let currentPlayer = 1;
function check(x, y) {
  let box = document.getElementById(`row${x}col${y}`);
//   this.x = x;
//   this.y = y;
  if (box.innerHTML === " ") {
    if (currentPlayer % 2 == 0) {
      document.getElementById(`row${x}col${y}`).innerHTML = "O";
    } else {
      document.getElementById(`row${x}col${y}`).innerHTML = "X";
    }
    currentPlayer++;
  } else {
    alert("This box is not empty");
  }
  winCheck(x, y);
}

function winCheck(x, y) {
  let currentCell = document.getElementById(`row${x}col${y}`).innerHTML;
  let count = 1;
  let i = 1;
  //Horizon
  while (
    y + i < newTable.column &&
    document.getElementById(`row${x}col${y + i}`).innerHTML === currentCell
  ) {
    count++;
    i++;
  }

  while (
    y - i >= 0 &&
    document.getElementById(`row${x}col${y - i}`).innerHTML === currentCell
  ) {
    count++;
    i++;
  }
  endGame(count);
  //Vertical
  count = 1;
  i = 1;

  while (
    x + i < newTable.row &&
    document.getElementById(`row${x + i}col${y}`).innerHTML === currentCell
  ) {
    count++;
    i++;
  }

  while (
    x - i >= 0 &&
    document.getElementById(`row${x - i}col${y}`).innerHTML === currentCell
  ) {
    count++;
    i++;
  }
  endGame(count);
  //Left diagonal
  count = 1;
  i = 1;
  let j = 1;

  while (
    y + j < newTable.column &&
    x + i < newTable.row &&
    document.getElementById(`row${x + i}col${y + j}`).innerHTML === currentCell
  ) {
    count++;
    i++;
    j++;
  }

  while (
    y - j >= 0 &&
    x - i >= 0 &&
    document.getElementById(`row${x - i}col${y - j}`).innerHTML === currentCell
  ) {
    count++;
    i++;
    j++;
  }
  endGame(count);
  //Right diagonal
  count = 1;
  i = 1;
  j = 1;
  while (
    y + j < newTable.column &&
    x - i >= 0 &&
    document.getElementById(`row${x - i}col${y + j}`).innerHTML === currentCell
  ) {
    count++;
    i++;
    j++;
  }

  while (
    y - j >= 0 &&
    document.getElementById(`row${x + i}col${y - j}`).innerHTML === currentCell
  ) {
    count++;
    i++;
    j++;
  }

  endGame(count);
}

function endGame(count) {
  if (count >= 5) {
    alert("You have won");
  }
}
