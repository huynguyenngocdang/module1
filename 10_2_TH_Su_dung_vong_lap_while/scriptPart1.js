let num = 0;
let total = 0;

while (num != -1) {
  num = parseInt(prompt("Enter a number. (If you want to end type -1)"));
  alert(num);
  //phần code tính tổng
  total += num;
}

alert(total);
