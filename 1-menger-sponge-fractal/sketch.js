let a = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(51);
  stroke(255);
  noFill();

  rotateX(a)
  box(200);
  a += 0.001;
}
