const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
  constructor() {
    this.velocity = {
      dx: 0,
      dy: 0,
    };

    this.rotation = 0;

    const image = new Image();
    image.src = "./image/spaceship.png";
    image.onload = () => {
      const scale = 0.15;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20,
      };
    };
  }
  draw() {
    // c.fillStyle = "red"
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    
    // save - translate - rotation - translate to rotate
    c.save();
    c.translate(
      player.position.x + player.width / 2,
      player.position.y + player.height / 2
    );
    c.rotate(this.rotation);
    c.translate(
      -player.position.x - player.width / 2,
      -player.position.y - player.height / 2
    );
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    c.restore();
  }

  update() {
    if (this.image) {
      this.draw();
      this.position.x += this.velocity.dx;
    }
  }
}

const player = new Player();
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.dx = -4;
    player.rotation = -0.15;
  } else if (
    keys.d.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.dx = 4;
    player.rotation = 0.15;
  } else {
    player.velocity.dx = 0;
    player.rotation = 0;
  }
}
animate();

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a":
      console.log("left");
      keys.a.pressed = true;
      break;
    case "d":
      console.log("right");
      keys.d.pressed = true;
      break;
    case " ":
      console.log("space");
      break;

    default:
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "a":
      console.log("left");
      keys.a.pressed = false;
      break;
    case "d":
      console.log("right");
      keys.d.pressed = false;
      break;
    case " ":
      console.log("space");
      break;

    default:
      break;
  }
});
