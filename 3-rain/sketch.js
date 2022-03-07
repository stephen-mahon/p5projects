let d = [];

function setup() {
  createCanvas(640, 360);
  for(let i = 0; i < 200; i++) {
    d[i] = new Drop;
  }
  
}

function draw() {
  background(230, 230, 250);
  for(let i of d) {
    i.fall();
    i.show();
  }
}
