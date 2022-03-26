// dx/dt = a(y - x).
// dy/dt = x (b - z) - y,
// dz/dt = xy - cz.
let x = 0.1;
let y = 0;
let z = 0;

let a = 11;
let b = 30;
let c = 8.0/3.0;

let points = new Array();

function setup() {
  createCanvas(800, 600, WEBGL);
  colorMode(HSB);
}

function draw() {
  background(0);
  let dt = 0.01;
  x += (a * (y - x)) * dt;
  y += (x * (b - z) - y) * dt;
  z += (x*y - c*z) * dt;

  points.push(new p5.Vector(x, y, z));
  translate(0, 0, -80);
  let camX = map(mouseX, 0, width, -200, 200);
  let camY = map(mouseY, 0, height, -200, 200);
  camera(camX, camY, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  scale(5);
  stroke(255);
  noFill();
  point(x, y, z);

  let hu = 0;
  beginShape();

  for (let v of points) {
    stroke(hu, 255, 255);
    vertex(v.x, v.y, v.z);

    hu += 1;
    if (hu > 255) {
      hu = 0;
    }
  }
  endShape();
}
