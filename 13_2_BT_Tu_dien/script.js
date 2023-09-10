let arr_eng = ["banana", "apple", "orange", "pen", "pencil", "book"];
let arr_vie = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];

function translateThis() {
  let input = document.getElementById("input").value;
  let index;
  let result = "";
  if (arr_eng.indexOf(input) != -1) {
    index = arr_eng.indexOf(input);
    result = arr_vie[index];
  } else if (arr_vie.indexOf(input) != -1) {
    index = arr_vie.indexOf(input);
    result = arr_eng[index];
  } else {
    result = "Không tìm thấy!";
  }
  document.getElementById("result").innerHTML = result;
}

function contributeThis() {
    arr_eng.push(document.getElementById("contributeEng").value);
    arr_vie.push(document.getElementById("contributeViet").value);
    document.getElementById("contributeEng").value='';
    document.getElementById("contributeViet").value='';
}
