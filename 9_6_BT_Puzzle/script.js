let img1 = document.getElementById("object1");
let img2 = document.getElementById("object2");
let img3 = document.getElementById("object3");
let array1 = ["image/1_1.png", "image/2_1.png", "image/3_1.png"];
let array2 = ["image/1_2.png", "image/2_2.png", "image/3_2.png"];
let array3 = ["image/1_3.png", "image/2_3.png", "image/3_3.png"];


//random interger
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random image on load page
function randomImage() {
  img1.src = array1[parseInt(getRandomInt(0, 2)).toFixed(0)];
  img2.src = array2[parseInt(getRandomInt(0, 2)).toFixed(0)];
  img3.src = array3[parseInt(getRandomInt(0, 2)).toFixed(0)];
}

//change image on click
function changeImg(src, id) {
  let text = src.substring(src.length - 13);
  let currentPos;
  if (id == "object1") {
    currentPos = array1.indexOf(text);

    if (currentPos == 2) {
      currentPos = 0;
    } else {
      currentPos += 1;
    }
    img1.src = array1[currentPos];
  }
  if (id == "object2") {
    currentPos = array2.indexOf(text);

    if (currentPos == 2) {
      currentPos = 0;
    } else {
      currentPos += 1;
    }
    img2.src = array2[currentPos];
  }
  if (id == "object3") {
    currentPos = array3.indexOf(text);

    if (currentPos == 2) {
      currentPos = 0;
    } else {
      currentPos += 1;
    }
    img3.src = array3[currentPos];
  }
  check();
}

//check if puzzle correct
function check() {
  let img1 = document.getElementById("object1");
  let img2 = document.getElementById("object2");
  let img3 = document.getElementById("object3");
  let index1 = img1.src;
  let index2 = img2.src;
  let index3 = img3.src;
  index1 = index1.substring(index1.length - 13);
  index2 = index2.substring(index2.length - 13);
  index3 = index3.substring(index3.length - 13);

  if (
    array1.indexOf(index1) == array2.indexOf(index2) &&
    array2.indexOf(index2) == array3.indexOf(index3)
  ) {
    alert("You are correct");
  }

  console.log(array1.indexOf(index1));
  console.log(array2.indexOf(index2));
  console.log(array3.indexOf(index3));
}
