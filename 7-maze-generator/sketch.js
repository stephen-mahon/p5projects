let cols, rows;
let w = 40;
let grid = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w);
  rows = floor(height/w);

  for(let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid.push(new Cell(i,j));
    }
  }
}


function draw() {
  background(51);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}
 