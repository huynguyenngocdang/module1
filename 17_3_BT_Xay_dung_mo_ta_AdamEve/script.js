const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth / 2;
canvas.height = innerHeight / 2;

class AdamEveImage {
  constructor() {
    let image = new Image();
    image.src = "./image/10.png";
    image.onload = () => {
      this.image = image;
      const scale = 0.5;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height / 2 - this.height / 2 - 20,
      };
    };
  }

  draw() {
    if (this.image) {
      ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
  }
}

class Apple {
  constructor(weight) {
    this.weight = weight;
    let quantity = 10;
    this.quantity = quantity;
  }
  Apple() {}
  decrease() {
    return (this.quantity -= 1);
  }
  isEmpty() {
    if (this.quantity == 0) {
      return true;
    } else {
      return false;
    }
  }
  getWeight(quantity) {
    return quantity * this.weight;
  }
}

let apple = new Apple(1);
let appleQuantity = apple.quantity;

class Human {
  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  }
  Human() {}
  isMale() {
    if (this.gender) {
      return true;
    } else {
      return false;
    }
  }
  setGender(gender) {
    if (gender) {
      return (this.gender = true);
    } else {
      return (this.gender = false);
    }
  }
  eat() {
    this.weight += apple.getWeight(1);
    apple.decrease();
  }
  say(string) {}
  getName() {
    return this.name;
  }
  setname(string) {
    this.name = string;
  }
  getWeight() {
    return this.weight;
  }
  setWeight(value) {
    this.weight = value;
  }
}

let adamEveImage = new AdamEveImage();
let human1 = new Human("Adam", "True", 70);
let human2 = new Human("Eva", false, 50);

function reloadData() {
  document.getElementById("nameA").value = human1.name;
  document.getElementById("nameB").value = human2.name;
  if (human1.isMale()) {
    document.getElementById("genderA").value = "M";
  } else {
    document.getElementById("genderA").value = "F";
  }

  if (human2.isMale()) {
    document.getElementById("genderB").value = "M";
  } else {
    document.getElementById("genderB").value = "F";
  }
  document.getElementById("weightA").value = human1.weight;
  document.getElementById("weightB").value = human2.weight;
  document.getElementById("appleAmount").value = apple.quantity;
  document.getElementById("appleWeight").value = apple.weight;
}

function setName(id) {
  let newName = prompt("Input new name");
  switch (id) {
    case "human1":
      human1.setname(newName);
      reloadData();
      break;
    case "human2":
      human2.setname(newName);
      reloadData();
      break;
    default:
      alert("Something wrong");
      break;
  }
}

function setGender(id) {
  let newGender = confirm("Is this one male?");

  switch (id) {
    case "human1":
      human1.setGender(newGender);
      reloadData();
      break;
    case "human2":
      human2.setGender(newGender);
      reloadData();
      break;
    default:
      alert("Something wrong");
      break;
  }
}

function setNewWeight(id) {
  let newWeight;
  do {
    newWeight = prompt("Input new weight (numeric value)");
  } while (!isNumeric(newWeight) && newWeight > 0);

  switch (id) {
    case "human1":
      human1.setWeight(newWeight);
      reloadData();
      break;
    case "human2":
      human2.setWeight(newWeight);
      reloadData();
      break;
    default:
      alert("Something wrong");
      break;
  }
}

function isNumeric(value) {
  return !isNaN(value) && isFinite(value);
}

function setNewAppleWeight() {
  let newAppleWeight;
  do {
    newAppleWeight = prompt("Input new weight (numeric value)");
  } while (!isNumeric(newAppleWeight) && newAppleWeight > 0);
  apple.weight = newAppleWeight;
  reloadData();
}

function getApple() {
    if (apple.quantity <= 9) {
        apple.quantity += 1;
    } else if (apple.quantity <= 8) {
        apple.quantity += 2;
    }
   else {
    alert("Full Apple");
  }

  reloadData();
}

function eatApple(id) {
  if (apple.isEmpty()) {
    alert("No more apple");
  } else {
    switch (id) {
      case "human1":
        human1.eat();
        reloadData();
        break;
      case "human2":
        human2.eat();
        reloadData();
        break;

      default:
        break;
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (adamEveImage.image) {
    let currentApple = apple.quantity;
    switch (currentApple) {
      case 10:
        adamEveImage.image.src = "./image/10.png";
        break;
      case 9:
        adamEveImage.image.src = "./image/9.png";
        break;
      case 8:
        adamEveImage.image.src = "./image/8.png";
        break;
      case 7:
        adamEveImage.image.src = "./image/7.png";
        break;
      case 6:
        adamEveImage.image.src = "./image/6.png";
        break;
      case 5:
        adamEveImage.image.src = "./image/5.png";
        break;
      case 4:
        adamEveImage.image.src = "./image/4.png";
        break;
      case 3:
        adamEveImage.image.src = "./image/3.png";
        break;
      case 2:
        adamEveImage.image.src = "./image/2.png";
        break;
      case 1:
        adamEveImage.image.src = "./image/1.png";
        break;
      case 0:
        adamEveImage.image.src = "./image/0.png";
        break;

      default:
        alert("image animate wrong");
        break;
    }

    adamEveImage.draw();
  }
}

animate();
