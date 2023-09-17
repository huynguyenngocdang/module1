//made by huy.nguyenngocdang

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
  constructor() {
    this.velocity = {
      dx: 0,
      dy: 0,
    };
    this.rotation = 0;
    let image = new Image();
    image.src = "./image/spaceship.png";
    image.onload = () => {
      this.image = image;
      const scale = 0.2;
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

let player = new Player();

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
};

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.a.pressed && player.position.x > 0) {
    player.velocity.dx = -2;
    player.rotation = (-90 * Math.PI) / 180;
  } else if (
    keys.d.pressed &&
    player.position.x + player.width < canvas.width
  ) {
    player.velocity.dx = 2;
    player.rotation = (90 * Math.PI) / 180;
  } else if (keys.w.pressed && player.position.y - player.height / 2 > 0) {
    player.velocity.dy = -2;
  } else if (
    keys.s.pressed &&
    player.position.y + player.height < canvas.height
  ) {
    player.velocity.dy = 2;
    player.rotation = (180 * Math.PI) / 180;
  } else {
    player.velocity.dx = 0;
    player.velocity.dy = 0;
    player.rotation = 0;
  }
}

animate();

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

    default:
      break;
  }
});
