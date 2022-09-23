let x, y;
let step = 1;
let stepSize = 2;
let numSteps = 1;
let state = 0;
let turncounter = 0;
let totalSteps

function setup() {
  createCanvas(500, 500);

  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = rows * cols;

  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(0);
while(step <= totalSteps) {
  //textSize(stepSize);
  //textAlign(CENTER, CENTER);
  //text(step, x, y);
  fill(255);
  stroke(255);
  if (isPrime(step)) {
    point(x, y, stepSize*0.5);
  }
  //strokeWeight(.5)
  //line(x, y, px, py);
  px = x;
  py = y;

  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize
      break;
    case 3:
      y += stepSize;
      break;
  }

  if (step % numSteps == 0) {
    state = (state +1) % 4
    turncounter++
    if (turncounter % 2 == 0) {
      numSteps ++
    }
  }
  step++;
}
}

function isPrime(value) {
  if (value == 1) return false;
  for(let i = 2; i <= sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}