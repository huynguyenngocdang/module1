const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const statusLamp = document.getElementById("statusLamp");

class Lamp {
  constructor() {
    let image = new Image();
    this.battery = 100;
    image.src = "./image/pic_bulbon.gif";

    image.onload = () => {
      this.image = image;
      this.width = image.width;
      this.height = image.height;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20,
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

let lamp = new Lamp();

class Battery {
  constructor() {
    let image = new Image();

    image.src = "./image/1_1.png";

    image.onload = () => {
      this.image = image;
      this.width = image.width;
      this.height = image.height;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: 0,
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

let battery = new Battery();

function getStatus() {
  let status = statusLamp.value;
  return status;
}

function changeStatus() {
  let status = statusLamp.value;
  if (status == "ON") {
    statusLamp.value = "OFF";
    status = "OFF";
  } else {
    statusLamp.value = "ON";
    status = "ON";
  }
  return status;
}
function animate() {
  requestAnimationFrame(animate);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let status = getStatus();
  // finished loading image
  if (lamp.image) {
    if (status == "ON" && lamp.battery > 0) {
      lamp.image.src = "./image/pic_bulbon.gif";
    } else {
      lamp.image.src = "./image/pic_bulboff.gif";
      statusLamp.value = "OFF"
    }
  }

  if (battery.image) {
    if (lamp.battery >= 85) {
      battery.image.src = "./image/1_1.png";
    } else if (lamp.battery >= 70) {
      battery.image.src = "./image/1_2.png";
    } else if (lamp.battery >= 55) {
      battery.image.src = "./image/1_3.png";
    } else if (lamp.battery >= 40) {
      battery.image.src = "./image/1_4.png";
    } else if (lamp.battery >= 25) {
      battery.image.src = "./image/1_5.png";
    } else if (lamp.battery >= 5) {
      battery.image.src = "./image/1_6.png";
    } else if (lamp.battery >= 0) {
      battery.image.src = "./image/1_7.png";
    }
  }
  document.getElementById("statusBattery").value = lamp.battery;

  lamp.draw();
  battery.draw();
}

function batteryDrain() {
  setInterval(() => {
    let lampStatus = getStatus();
    if (lamp.battery > 0 && lampStatus == "ON") {
      lamp.battery -= 5;
    } else {
      lamp.battery = lamp.battery;
    }
    // console.log(lamp.battery);
  }, 1500);
}

function chargeBattery() {
  if (lamp.battery < 95) {
    lamp.battery += 10;
  } else if ((lamp.battery = 95)) {
    lamp.battery += 5;
  } 

  if (lamp.battery == 100) {
    alert("Battery is full")
  }

}

animate();
batteryDrain();
