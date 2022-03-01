let stars = [];
let num = 400;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < num; i++){
    star = new Star();
    stars.push(star)
  }
}

function draw() {
  background(0);
  translate(width/2, height/2)
  for (let star of stars) {
    star.update();
    star.show();
  }
}
