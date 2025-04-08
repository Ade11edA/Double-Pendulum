let x0, y0;
let g = 1;
let length1 = 100;
let length2 = 100;
let m1 = 1;
let m2 = 1;
let angle1;
let angle2;
let x1,y1;
let angularVelocity1, angularVelocity2, angularAcceleration1, angularAcceleration2;
let showBackground = false;
let x2,y2;
function setup() {
  createCanvas(400, 400);
  x0 = width/2;
  y0 = 50;
  angle1 = Math.PI/2;
  angle2 = Math.PI/4;
  angularVelocity1 = 0;
  angularVelocity2 = 0;
}

function draw() {
  if (showBackground){
    background(255);
  }
  x1 = x0 + length1 * Math.sin(angle1);
  y1 = y0 +length1 * Math.cos(angle1);
  x2 = x1 + (length2 * Math.sin(angle2));
  y2 = y1 + (length2 * Math.cos(angle2));
  line(x0,y0, x1,y1);
  line(x1,y1,x2,y2);
  circle(x2,y2,10);
 const delta = angle1 - angle2;

const numerator1 = -g * (2 * m1 + m2) * Math.sin(angle1) - m2 * g * Math.sin(angle1 - 2 * angle2)- 2 * Math.sin(delta) * m2 * (angularVelocity2 ** 2 * length2 +angularVelocity1 ** 2 * length1 * Math.cos(delta));

const denominator1 = length1 * (2 * m1 + m2 - m2 * Math.cos(2 * delta));
const angularAcceleration1 = numerator1 / denominator1;

const numerator2 = 2 * Math.sin(delta) * (angularVelocity1 ** 2 * length1 * (m1 + m2) + g * (m1 + m2) * Math.cos(angle1) + angularVelocity2 ** 2 * length2 * m2 * Math.cos(delta));

const denominator2 = length2 * (2 * m1 + m2 - m2 * Math.cos(2 * delta));
const angularAcceleration2 = numerator2 / denominator2;

  angularVelocity1 += angularAcceleration1;
  angularVelocity2 += angularAcceleration2;
  angle1 +=angularVelocity1;
  angle2 +=angularVelocity2;
}

function changeConditions() {
  const a1 = parseFloat(document.getElementById("angle1Input").value);
  const a2 = parseFloat(document.getElementById("angle2Input").value);
  const v1 = parseFloat(document.getElementById("velocity1Input").value);
  const v2 = parseFloat(document.getElementById("velocity2Input").value);
  showBackground = document.getElementById("showBackground").checked;
  angle1 = a1 * (Math.PI / 180);
  angle2 = a2 * (Math.PI / 180);
  angularVelocity1 = v1;
  angularVelocity2 = v2;
  length1 = parseFloat(document.getElementById("length1Input").value);
  length2 = parseFloat(document.getElementById("length2Input").value);
  
}
