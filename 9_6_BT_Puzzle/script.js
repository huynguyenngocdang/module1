// function changeImg(source, id) {
//   let img1 = document.getElementById("object1");
//   let img2 = document.getElementById("object2");
//   let img3 = document.getElementById("object3");
//   let srcImg1 = img1.src;
//   let srcImg2 = img2.src;
//   let srcImg3 = img3.src;
//   let posFirst;
//   let posLast;

//   let textStart = "image/";
//   let textEnd = ".png";
//   if (checkPic(srcImg1, srcImg2, srcImg3)) {
//     alert("Correct");
//   }

//   if (id == "object1") {
//     posFirst = parseInt(srcImg1.charAt(srcImg1.length - 7));
//     posLast = parseInt(srcImg1.charAt(srcImg1.length - 5));
//     if (posFirst == 3) {
//       posFirst = 1;
//       img1.src = textStart + posFirst + "_" + posLast + textEnd;
//     } else {
//       posFirst += 1;
//       img1.src = textStart + posFirst + "_" + posLast + textEnd;
//     }
//     console.log(posLast);
//   }
//   if (id == "object2") {
//     posFirst = parseInt(srcImg2.charAt(srcImg2.length - 7));
//     posLast = parseInt(srcImg2.charAt(srcImg2.length - 5));
//     if (posFirst == 3) {
//       posFirst = 1;
//       img2.src = textStart + posFirst + "_" + posLast + textEnd;
//     } else {
//       posFirst += 1;
//       img2.src = textStart + posFirst + "_" + posLast + textEnd;
//     }
//     console.log(posLast);
//   }
//   if (id == "object3") {
//     posFirst = parseInt(srcImg3.charAt(srcImg3.length - 7));
//     posLast = parseInt(srcImg3.charAt(srcImg3.length - 5));
//     if (posFirst == 3) {
//       posFirst = 1;
//       img3.src = textStart + posFirst + "_" + posLast + textEnd;
//     } else {
//       posFirst += 1;
//       img3.src = textStart + posFirst + "_" + posLast + textEnd;
//     }
//     console.log(posLast);
//   }

//   if (checkPic(srcImg1, srcImg2, srcImg3)) {
//     alert("Correct");
//   }
// }

// function checkPic(obj1, obj2, obj3) {
//   let posFirstObj = parseInt(obj1.charAt(obj1.length - 7));
//   let posSecondObj = parseInt(obj2.charAt(obj2.length - 7));
//   let posThirdObj = parseInt(obj3.charAt(obj3.length - 7));
//   if (posFirstObj == posSecondObj && posSecondObj == posThirdObj) {
//     return true;
//   } else {
//     return false;
//   }
// }

let img1 = document.getElementById("object1");
let img2 = document.getElementById("object2");
let img3 = document.getElementById("object3");
let array1 = ["image/1_1.png", "image/2_1.png", "image/3_1.png"];
let array2 = ["image/1_2.png", "image/2_2.png", "image/3_2.png"];
let array3 = ["image/1_3.png", "image/2_3.png", "image/3_3.png"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomImage() {
  img1.src = array1[parseInt(getRandomInt(0, 2)).toFixed(0)];
  img2.src = array2[parseInt(getRandomInt(0, 2)).toFixed(0)];
  img3.src = array3[parseInt(getRandomInt(0, 2)).toFixed(0)];
}

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
  
  if (array1.indexOf(index1) == array2.indexOf(index2) && array2.indexOf(index2)  == array3.indexOf(index3)) {
    alert("You are correct");
  }

  console.log(array1.indexOf(index1));
  console.log(array2.indexOf(index2));
  console.log(array3.indexOf(index3));
}
