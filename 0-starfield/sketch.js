let stars = [];
let num = 100;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < num; i++){
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let z = random(width);
    star = new Star(x, y, z);
    stars.push(star)
  }
}

function draw() {
  background(0);
  translate(width/2, height/2)
  for (let star of stars) {
    star.move();
    star.show();
  }
}
