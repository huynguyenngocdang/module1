const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.height = innerHeight;
canvas.width = innerWidth;
const PLAYERWIDTH = 150;
const PLAYERHEIGHT = 50;
const PLAYERCOLOR = "rgba(39, 149, 245, 0.8)";
const PLAYERSPEED = 5;
const BALLCOLOR = "rgba(245, 39, 39, 0.8)";
const BALLRADIUS = 10;
const BALLSPEED = 3;

const scoreEl = document.getElementById("scoreEl");
const modalEl = document.querySelector("#modalEl");
const startGameBtn = document.querySelector("#startGameBtn");
const scoreResult = document.querySelector("#scoreResult");
var boingSound = new Audio("sound/boing.wav");
var smashSound = new Audio("sound/smash.wav");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

class Player {
  constructor(x, y, width, height) {
    this.x = x + 20;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = {
      dx: 0,
      dy: 0,
    };
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = PLAYERCOLOR;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.x += this.velocity.dx;
    this.y += this.velocity.dy;
  }
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = {
      dx: BALLSPEED,
      dy: BALLSPEED,
    };
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = BALLCOLOR;
    ctx.fill();
  }
  update() {
    this.draw();
    this.x += this.velocity.dx;
    this.y += this.velocity.dy;
  }
}

let player = new Player(
  canvas.width / 2 - PLAYERWIDTH / 2,
  canvas.height - PLAYERHEIGHT / 2 - 100,
  PLAYERWIDTH,
  PLAYERHEIGHT
);

let ball = new Ball(
  canvas.width / 2 - BALLRADIUS / 2,
  20 + BALLRADIUS / 2,
  BALLRADIUS
);

function startGame() {
  player = new Player(
    canvas.width / 2 - PLAYERWIDTH / 2,
    canvas.height - PLAYERHEIGHT / 2 - 100,
    PLAYERWIDTH,
    PLAYERHEIGHT
  );
  ball = new Ball(
    canvas.width / 2 - BALLRADIUS / 2,
    20 + BALLRADIUS / 2,
    BALLRADIUS
  );
  ball.velocity.dx = BALLSPEED;
  ball.velocity.dy = BALLSPEED;
}
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};
let score = 0;
let frame = 0;
let animationId;
function animate() {
  animationId = requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  ball.update();

  if (keys.a.pressed && player.x > 0) {
    player.velocity.dx = -PLAYERSPEED;
  } else if (keys.d.pressed && player.x + player.width / 2 < canvas.width) {
    player.velocity.dx = PLAYERSPEED;
  } else {
    player.velocity.dx = 0;
  }
  if (ball.x + ball.radius >= canvas.width || ball.x - ball.radius <= 0) {
    ball.velocity.dx = -ball.velocity.dx;

    boingSound.currentTime = 0;
    boingSound.play();
  }

  if (ball.y >= canvas.height || ball.y - ball.radius <= 0) {
    ball.velocity.dy = -ball.velocity.dy;
  }

  if (ball.y - ball.radius <= 0) {
    boingSound.currentTime = 0;
    boingSound.play();
  }
  if (
    ball.y - ball.radius <= player.y + player.height &&
    ball.x + ball.radius >= player.x &&
    ball.x - ball.radius <= player.x + player.width &&
    ball.y + ball.radius >= player.y
  ) {
    // ball.velocity.dx = -(ball.velocity.dx + Math.ceil( Math.random()));
    ball.velocity.dy = -(ball.velocity.dy + Math.ceil( Math.random()));

    boingSound.currentTime = 0;
    boingSound.play();
  }

  frame++;
  if (frame % 1000) {
    score++;
  }
  scoreEl.innerHTML = score;
  scoreResult.innerHTML = score;

  if (ball.y >= canvas.height) {
    
    smashSound.currentTime = 0.7
    smashSound.play();
    cancelAnimationFrame(animationId);
    modalEl.style.display = "flex";
    score = 0;
  }
}

startGameBtn.addEventListener("click", () => {
    startGame();
    animate();

  modalEl.style.display = "none";
});

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a":
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
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

    default:
      break;
  }
});

