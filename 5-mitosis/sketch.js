let cells = []
let num = 5;
let spl = 2;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < num; i++) {
    cells.push(new Cell());
  }
}

function draw() {
  background(51);
  for (cell of cells) {
    cell.move();
    cell.show();
  }
}

function mousePressed() {
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      for (let j = 0; j<spl ; j++) {
        cells.push(cells[i].mitosis());
      }
      cells.splice(i, 1);
    }
  }
}