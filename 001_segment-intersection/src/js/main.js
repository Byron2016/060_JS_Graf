const myCanvas = document.getElementById("myCanvas");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const A = { x: 200, y: 150 };
const B = { x: 150, y: 250 };
const C = { x: 50, y: 100 };
const D = { x: 250, y: 200 };

const ctx = myCanvas.getContext("2d");

let t = 0.9; // t is a value between 0 and 1 a porcentage

ctx.beginPath();
ctx.moveTo(A.x, A.y);
ctx.lineTo(B.x, B.y);
ctx.moveTo(C.x, C.y);
ctx.lineTo(D.x, D.y);
ctx.stroke();

drawDot(A, "A");
drawDot(B, "B");
drawDot(C, "C");
drawDot(D, "D");

// find segment middle point and draw it
const M = {
  x: lerp(A.x, B.x, t),
  y: lerp(A.y, B.y, t),
};
drawDot(M, "M");

const N = {
  x: lerp(C.x, D.x, t),
  y: lerp(C.y, D.y, t),
};
drawDot(N, "N");

function drawDot(point, label) {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 14px Arial";
  ctx.fillText(label, point.x, point.y);
}
