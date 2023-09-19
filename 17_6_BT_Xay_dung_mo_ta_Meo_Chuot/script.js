//made by huy.nguyenngocdang

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var audioCat = new Audio("./sound/Meow.wav");

const scoreEl = document.getElementById("scoreEl");
const modalEl = document.querySelector("#modalEl");
const startGameBtn = document.querySelector("#startGameBtn");
const scoreResult = document.querySelector("#scoreResult");

class Player {
  constructor() {
    this.velocity = {
      dx: 0,
      dy: 0,
    };
    this.rotation = 0;
    this.position = {
      x: 0,
      y: 0,
    };
    let image = new Image();
    image.src = "./image/cat1.svg";
    image.onload = () => {
      this.image = image;
      const scale = 1;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height / 2 - this.height / 2 - 20,
      };
    };
  }

  draw() {
    ctx.save();
    ctx.translate(
      player.position.x + player.width / 2,
      player.position.y + player.height / 2
    );
    ctx.rotate(this.rotation);
    ctx.translate(
      -player.position.x - player.width / 2,
      -player.position.y - player.height / 2
    );
    if (this.image) {
      ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
    ctx.restore();
  }
  update() {
    if (this.image) {
      this.draw();
      this.position.x += this.velocity.dx;
      this.position.y += this.velocity.dy;
    }
  }
}

class Mouse {
  constructor(status, x, y) {
    this.status = status;
    this.velocity = {
      dx: 0,
      dy: 0,
    };
    this.rotation = 0;
    this.x = x;
    this.y = y;
    let image = new Image();
    image.src = "./image/mouse1.svg";
    image.onload = () => {
      this.image = image;
      const scale = 1;
      this.width = image.width * scale;
      this.height = image.height * scale;
    };
  }

  draw() {
    if (this.image) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
  update() {
    if (this.image) {
      this.draw();
      this.x += this.velocity.dx;
      this.y += this.velocity.dy;
    }
  }
}

let player = new Player();

let mouses = [];

let frames = 0;

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};

function spawnMouse() {
  setInterval(() => {
    let status = "alive";
    let x = randomInt(120, canvas.width - 120);
    let y = randomInt(53, canvas.height - 53);

    mouses.push(new Mouse(status, x, y));
  }, 1000);
}
let animationId;
let score = 0;

function animate() {
  animationId = requestAnimationFrame(animate);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const playerSpeed = 3;

  player.update();
  mouses.forEach((mouse, index) => {
    mouse.update();
    const distPlayerEnemy = Math.hypot(
      mouse.x - player.position.x,
      mouse.y - player.position.y
    );
    if (mouse.status == "alive") {
      if (
        distPlayerEnemy +
          mouse.width -
          player.width +
          mouse.height -
          player.height <
        1

        // mouse.y - mouse.height <= player.y + player.height &&
        // mouse.x + mouse.width >= player.x &&
        // mouse.x - mouse.width <= player.x + player.width &&
        // mouse.y + mouse.height >= player.y
      ) {
        score += 5;
        mouse.status = "dead";
        mouse.image.src = "./image/mouse2.svg";
        audioCat.play();
        scoreEl.innerHTML = score;
        scoreResult.innerHTML = score;
      }
    }
  });

  if (keys.a.pressed && player.position.x > 0) {
    player.velocity.dx = -playerSpeed;

    player.rotation = (-180 * Math.PI) / 180;
  } else if (
    keys.d.pressed &&
    player.position.x + player.width < canvas.width
  ) {
    player.velocity.dx = playerSpeed;
    // player.rotation = (90 * Math.PI) / 180;
  } else if (keys.w.pressed && player.position.y - player.height / 2 > 0) {
    player.velocity.dy = -playerSpeed;
    player.rotation = (-90 * Math.PI) / 180;
  } else if (
    keys.s.pressed &&
    player.position.y + player.height < canvas.height
  ) {
    player.velocity.dy = playerSpeed;
    player.rotation = (90 * Math.PI) / 180;
  } else {
    player.velocity.dx = 0;
    player.velocity.dy = 0;
    player.rotation = 0;
  }
  if (keys.space.pressed && audioCat) {
    audioCat.play();
  }
  const mouseMax = 10;
  let currentMouseCount = checkMouse();
  if (currentMouseCount >= mouseMax) {
    cancelAnimationFrame(animationId);
    modalEl.style.display = "flex";
    currentMouseCount = 0;
  }
}

function removeMouse() {
  setInterval(() => {
    mouses.forEach((mouse, index) => {
      if (mouse.status == "dead") {
        mouses.splice(index, 1);
      }
    });
  }, 2000);
}

function checkMouse() {
  let mouseCount = 0;
  mouses.forEach((mouse, index) => {
    if (mouse.status == "alive") {
      mouseCount += 1;
    }
  });
  return mouseCount;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

startGameBtn.addEventListener("click", () => {

  player = new Player();
  mouses = [];
  animate();
  spawnMouse();
  removeMouse();
  modalEl.style.display = "none";
  score = 0;
  scoreEl.innerHTML = score;
  scoreResult.innerHTML = score;
});

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a":
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
    case "w":
      keys.w.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;

    case " ":
      keys.space.pressed = true;
      break;

    default:
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "a":
      keys.a.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    case "w":
      keys.w.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case " ":
      keys.space.pressed = false;
      break;

    default:
      break;
  }
});
