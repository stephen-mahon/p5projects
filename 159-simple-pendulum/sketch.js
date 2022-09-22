let pendulum;

function setup() {
  createCanvas(600, 400);

  pendulum = new Pendulum(width/2, 0, 175);
}

function draw() {
  background(0);
  pendulum.update();
  pendulum.display();
}
