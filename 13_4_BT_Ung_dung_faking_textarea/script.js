const textTyping =
  "[Bài tập] Ứng dụng vui Faking Textarea on Typing. Mô tả chức năng: Khi người dùng gõ bàn phím thì một dòng chữ cố định sẽ lần lượt hiện ra. Cho dù người dùng gõ chữ nào thì cũng lần lượt hiện ra dòng chữ cố định đó.";

let txtArray = Array.from(textTyping);
let resultPrint = "";
console.log(txtArray)

function fakeText() {
  let inputLength = document.getElementById("txtarea").value.length;

  for (let index = 0; index < inputLength; index++) {
    resultPrint += txtArray[index];
    if (index == txtArray.length) {
      document.getElementById("txtarea").value = "";
      resultPrint = "";
    }
  }
  document.getElementById("txtarea").value = resultPrint;
  resultPrint = "";
  setTimeout("fakeText()", 1);
}
