let cols, rows;
let scl = 20;
let grid = [];

function setup() {
  createCanvas(400, 400);//, WEBGL);
  cols = floor(width/scl);
  rows = floor(height/scl);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push(new Cell(i, j));
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}
