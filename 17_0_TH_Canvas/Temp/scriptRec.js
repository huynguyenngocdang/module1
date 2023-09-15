let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0,255,0,0.5)';
c.fillRect(300, 300, 100, 100);

c.beginPath();
c.moveTo(150,150);
c.lineTo(450, 150);
c.lineTo(350, 350);
c.lineTo(150,150);
c.strokeStyle = "#fa34a3";
c.stroke();