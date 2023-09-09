let yes = document.getElementById("yesBtn");
let no = document.getElementById("noBtn");

no.addEventListener("mouseover", changePos);

function changePos() {
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    document.getElementById("noBtn").style.left = x + 'px';
    document.getElementById("noBtn").style.top = y + 'px';
    console.log(x);
    console.log(y);
}