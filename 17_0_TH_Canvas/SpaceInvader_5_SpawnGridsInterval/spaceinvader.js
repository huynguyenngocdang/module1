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

class Projectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 4;
  }

  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = "red";
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.dx;
    this.position.y += this.velocity.dy;
  }
}

class Invader {
  constructor({ position }) {
    this.velocity = {
      dx: 0,
      dy: 0,
    };

    const image = new Image();
    image.src = "./image/invader.png";
    image.onload = () => {
      const scale = 1;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: position.x,
        y: position.y,
      };
    };
  }
  draw() {
    // c.fillStyle = "red"
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update({ velocity }) {
    if (this.image) {
      this.draw();
      this.position.x += velocity.dx;
      this.position.y += velocity.dy;
    }
  }
}

class Grid {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.velocity = {
      dx: 1,
      dy: 0,
    };

    this.invaders = [];
    const columns = Math.floor(Math.random() * 10 + 5);
    const rows = Math.floor(Math.random() * 5 + 2);

    this.width = columns * 30;
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        this.invaders.push(
          new Invader({
            position: {
              x: i * 30,
              y: j * 30,
            },
          })
        );
      }
    }
  }
  update() {
    this.position.x += this.velocity.dx;
    this.position.y += this.velocity.dy;
    this.velocity.dy = 0;
    if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
      this.velocity.dx = -this.velocity.dx;
      this.velocity.dy = 30;
    }
  }
}

const player = new Player();
const projectiles = [];

const grids = [];

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

let frames = 0;
let randomInterval = Math.floor(Math.random() * 500) + 500;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  projectiles.forEach((projectile, indexProjectile) => {
    if (projectile.position.y + projectile.radius <= 0) {
      setTimeout(() => {
        projectiles.splice(indexProjectile, 1);
      }, 0);
    } else {
      projectile.update();
    }
  });

  grids.forEach((grid, indexGrid) => {
    grid.update();
    grid.invaders.forEach((invader, indexInvader) => {
      invader.update({ velocity: grid.velocity });
      projectiles.forEach((projectile, indexProjectile) => {
        if (
          projectile.position.y - projectile.radius <=
            invader.position.y + invader.height &&
          projectile.position.x + projectile.radius >= invader.position.x &&
          projectile.position.x - projectile.radius <=
            invader.position.x + invader.width &&
          projectile.position.y + projectile.radius >= invader.position.y
        ) {
          setTimeout(() => {
            const invaderFound = grid.invaders.find(
              (invader2) => invader2 === invader
            );
            const projectileFound = projectiles.find(
              (projectile2) => projectile2 === projectile
            );

            //remove invader and projectile
            if (invaderFound && projectileFound) {
              grid.invaders.splice(indexInvader, 1);
              projectiles.splice(indexProjectile, 1);

              //reposition grid width after destroy invader
              if (grid.invaders.length > 0) {
                const firstInvader = grid.invaders[0];
                const lastInvader = grid.invaders[grid.invaders.length - 1];
                grid.width =
                  lastInvader.position.x -
                  firstInvader.position.x +
                  lastInvader.width;
                grid.position.x = firstInvader.position.x;
              } else {
                grids.splice(indexGrid, 1);
              }
            }
          }, 0);
        }
      });
    });
  });

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

  //spawn enemies
  if (frames % randomInterval === 0) {
    grids.push(new Grid());
    randomInterval = Math.floor(Math.random() * 1000) + 1000;
    frames = 0;
  }

  frames++;
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
      // console.log("left");
      keys.a.pressed = false;
      break;
    case "d":
      // console.log("right");
      keys.d.pressed = false;
      break;
    case " ":
      // console.log("space");
      projectiles.push(
        new Projectile({
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y,
          },
          velocity: {
            dx: 0,
            dy: -10,
          },
        })
      );
      console.log(projectiles);
      break;

    default:
      break;
  }
});
