let angle = 0;
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
  background(51);
  let len = 100;
  angle = slider.value();
  stroke(255);
  translate(200, height);
  branch(len);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if(len > 4) {
    push()
    rotate(angle);
    branch(2*len/3);
    pop();
    push();
    rotate(-angle);
    branch(2*len/3);
    pop();
  } 
}