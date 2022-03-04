let s;
let f;
let scl = 20;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  f = new Food();
  frameRate(10);
}

function draw() {
  background(51);
  s.update();
  s.show();

  //f.update();
  f.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  }   else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  }  else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
