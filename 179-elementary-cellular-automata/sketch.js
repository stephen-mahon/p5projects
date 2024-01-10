let cells = [];
let ruleValue = 110;
let ruleSet;
let w = 4;
let y = 0;

function setup() {
  createCanvas(600, 1804);

  ruleSet = ruleValue.toString(2).padStart(8, 0);
  let total = width / w;
  for (let i = 0; i < total; i++) {
    cells[i] = 0;
  }
  cells[floor(total / 2)] = 1;
}

function draw() {
  for (let i = 0; i < cells.length; i++) {
    let x = i * w;
    noStroke();
    fill(255 - cells[i] * 255);
    square(x, y, w);
  }

  y += w;

  let nextCells = [];
  let len = cells.length;
  for (let i = 0; i < cells.length; i++) {
    let left = cells[(i - 1 + len) % len];
    let right = cells[(i + 1 + len) % len];

    nextCells[i] = calculateState(left, cells[i], right);
  }

  cells = nextCells;
}

function calculateState(a, b, c) {
  let value = 7 - parseInt("" + a + b + c, 2);
  return parseInt(ruleSet[value]);
}
