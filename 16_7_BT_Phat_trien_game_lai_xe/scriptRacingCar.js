const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("scoreEl");
const modalEl = document.querySelector("#modalEl");
const startGameBtn = document.querySelector("#startGameBtn");
const scoreResult = document.querySelector("#scoreResult");

canvas.width = innerWidth / 2;
canvas.height = innerHeight;
let score = 0;

class Player {
  constructor() {
    this.velocity = {
      dx: 0,
      dy: 0,
    };
    const image = new Image();
    image.src = "./image/carPlayer.png";
    image.onload = () => {
      const scale = 0.3;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height,
      };
    };
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    if (this.image) {
      this.draw();
      this.position.x += this.velocity.dx;
    }
  }
}

class Enemy {
  constructor({ position, velocity }) {
    this.velocity = velocity;
    this.position = position;
    const image = new Image();
    image.src = "./image/cardown.png";
    image.onload = () => {
      const scale = 0.5;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position;
    };
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    if (this.image) {
      this.draw();
      this.position.x += this.velocity.dx;
      this.position.y += this.velocity.dy;
    }
  }
}

let player = new Player();
let enemies = [];
function init() {
  player = new Player();
  enemies = [];
  score = 0;
  scoreEl.innerHTML = score;
  scoreResult.innerHTML = score;
}

function animate() {
  animationId = requestAnimationFrame(animate);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.dx = -1;
  } else if (
    keys.d.pressed &&
    player.position.x + player.width < canvas.width
  ) {
    player.velocity.dx = 1;
  } else {
    player.velocity.dx = 0;
  }
  //  enemy.velocity.dy = 1;

  enemies.forEach((enemy, index) => {
    enemy.update();
    if (enemy.position.y > canvas.height) {
      setTimeout(() => {
        enemies.splice(index, 1);
        score += 100;

        scoreEl.innerHTML = score;
        scoreResult.innerHTML = score;
      }, 0);
    }
    //   const distPlayerEnemy = Math.hypot(player.position.x - enemy.position.x  , player.position.y  - enemy.position.y );

    //   if (distPlayerEnemy - player.height/2 - enemy.height/2  < 0.2  &&
    //   distPlayerEnemy - player.width/2 - enemy.width/2  < 0.2  ) {
    //     cancelAnimationFrame(animationId);
    //     modalEl.style.display = "flex";
    //   }
    const distPlayerEnemyWidth = Math.hypot(
      player.position.x - enemy.position.x
    );
    const distPlayerEnemyHeight = Math.hypot(
      player.position.y - enemy.position.y
    );
    if (
      distPlayerEnemyWidth - player.width / 2 - enemy.width / 2 + 20 < 0 &&
      distPlayerEnemyHeight - player.height / 2 - enemy.height / 2 < 0
    ) {
      cancelAnimationFrame(animationId);
      modalEl.style.display = "flex";
    }
  });
}

function spawnEnemies() {
  setInterval(() => {
    enemies.push(
      new Enemy({
        position: {
          x: randomInt(0, canvas.width - 44),
          y: 0,
        },
        velocity: {
          dx: 0,
          dy: 2,
        },
      })
    );
  }, 1000);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

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
      console.log("A");
      keys.a.pressed = false;
      break;
    case "d":
      console.log("D");
      keys.d.pressed = false;
      break;

    default:
      break;
  }
});

startGameBtn.addEventListener("click", () => {
  init();
  animate();
  spawnEnemies();
  modalEl.style.display = "none";
});
