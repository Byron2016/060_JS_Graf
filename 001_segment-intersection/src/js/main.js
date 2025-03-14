const myCanvas = document.getElementById("myCanvas");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const A = { x: 200, y: 150 };
const B = { x: 150, y: 250 };
const C = { x: 50, y: 100 };
const D = { x: 250, y: 200 };

const ctx = myCanvas.getContext("2d");

let t = -1; // t is a value between 0 and 1 a porcentage

// Add mouse
let angle = 0;
const mouse = { x: 0, y: 0 };
document.onmousemove = (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
};

animate();

function animate() {
  const radius = 50;
  A.x = mouse.x + Math.cos(angle) * radius;
  A.y = mouse.y - Math.sin(angle) * radius;
  B.x = mouse.x - Math.cos(angle) * radius;
  B.y = mouse.y + Math.sin(angle) * radius;
  angle += 0.01;

  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.beginPath();
  ctx.moveTo(A.x, A.y);
  ctx.lineTo(B.x, B.y);
  ctx.moveTo(C.x, C.y);
  ctx.lineTo(D.x, D.y);
  ctx.stroke();

  // draw dots
  drawDot(A, "A");
  drawDot(B, "B");
  drawDot(C, "C");
  drawDot(D, "D");

  // find segment middle point and draw them
  const M = {
    x: lerp(A.x, B.x, t),
    y: lerp(A.y, B.y, t),
  };

  const N = {
    x: lerp(C.x, D.x, t),
    y: lerp(C.y, D.y, t),
  };

  drawDot(M, "M", t < 0 || t > 1);
  drawDot(N, "N", t < 0 || t > 1);

  const I = getIntersection(A, B, C, D);
  if (I) {
    drawDot(I, "I");

    drawBottom(I);
  }

  t += 0.005;

  requestAnimationFrame(animate);
  if (t > 1.3) {
    t = -1;
  }
}

function drawBottom(I, scale = 100) {
  // Dibujar una barra que muestre como cambia el bottom
  // se lo coloca que empiece en media pantalla para ver valores - y +
  ctx.beginPath();
  ctx.rect(myCanvas.width / 2, 0, I.bottom / scale, 10);
  const bottom = I.bottom.toFixed(2);
  ctx.fillStyle = bottom <= 0 ? "Red" : "Black";
  ctx.fill();
}

function drawDot(point, label, isRed) {
  ctx.beginPath();
  ctx.fillStyle = isRed ? "Red" : "white";
  ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 14px Arial";
  ctx.fillText(label, point.x, point.y);
}
