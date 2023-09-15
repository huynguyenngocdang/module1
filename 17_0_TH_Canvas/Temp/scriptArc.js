var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var mouse = {
  x: undefined,
  y: undefined,
};
var maxRadius = 40;
var minRadius = 2;
var colorArray = ["#ffaa33", "#99ffaaa", "#00ff00", "#4411aa", "#ff1100"];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[randInt(0, colorArray.length)];
    this.draw = function () {
      c.fillStyle = this.color;
      c.fill();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = "blue";

      c.stroke();
    };
    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      // interactivity
      if (
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
      ) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
      } else if (this.radius > minRadius) {
        this.radius -= 1;
      }
    };
  }
}

function randInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var circlearray = [];
for (let i = 0; i < 800; i++) {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  var radius = randInt(20, 50);
  circlearray.push(new Circle(x, y, dx, dy, radius));
}

var circle1 = new Circle(200, 200, 1, 1, 50);
function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circlearray.length; i++) {
    circlearray[i].draw();
    circlearray[i].update();
  }
}

animate();
