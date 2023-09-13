class CreateRectangle {
  constructor(chieuDai, chieuRong, x, y) {
    this.x = x;
    this.y = y;
    this.chieuDai = chieuDai;
    this.chieuRong = chieuRong;
    this.chuVi = () => (chieuDai + chieuRong) * 2;
    this.dienTich = () => chieuDai * chieuRong
  }
}

function taoChuNhat() {
  let chieuDai = parseFloat(document.getElementById("chieuDai").value);
  let chieuRong = parseFloat(document.getElementById("chieuRong").value);
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");

  let chuNhat = new CreateRectangle(chieuDai, chieuRong, 50, 50);
  let resultChuVi = new Intl.NumberFormat("en-US").format(chuNhat.chuVi());
  let resultDienTich = new Intl.NumberFormat("en-US").format(chuNhat.dienTich());
  document.getElementById("result").innerHTML =
    "Chu vi = " + resultChuVi +" m <br/>"+ " Diện tích = " + resultDienTich + " &#13217;";
    console.log("chieuDai " + chieuDai);
    console.log("chieuRong " + chieuRong);
    ctx.clearRect(0, 0, 1368, 768);
    ctx.beginPath();
    ctx.rect(chuNhat.x, chuNhat.y, chuNhat.chieuDai, chuNhat.chieuRong);
    ctx.stroke();
}
