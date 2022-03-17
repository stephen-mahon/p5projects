let sun;

function setup() {
  createCanvas(400, 400);
  sun = new Planet(25, 0, 0);
  sun.spawnPlanets(10, 1);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  sun.orbit();
  sun.show();
}
