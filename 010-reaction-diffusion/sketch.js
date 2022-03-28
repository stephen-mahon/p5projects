let grid;
let next;

let dA = 1.0
let dB = 0.5
let feed = 0.055;
let k = 0.062;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  grid = [];
  next = [];
  for (let j = 0; j < width; j++) {
    grid[j] = []
    next[j] = []
    for (let i = 0; i < height; i++) {
      grid[j][i] = { a: 1, b: 0 };
      next[j][i] = { a: 1, b: 0 };
    }
  }

  for (let j = (height/2)-5; j < (height/2)+5; j++) {
    for (let i = (width/2)-5; i < (width/2)+5; i++) {
      grid[j][i].b = 1;
    }
  }
}

function draw() {
  background(51);

  for (let j = 1; j < width-1; j++) {
    for (let i = 1; i < height-1; i++) {
      let a = grid[j][i].a
      let b = grid[j][i].b
      next[j][i].a = a +
                     (dA * laplaceA(j, i)) -
                     (a * b * b) +
                     (feed *(1 -a));
      next[j][i].b = b +
                     (dB * laplaceB(j, i)) +
                     (a * b * b) -
                     ((k + feed) * b);
    }
  }

  loadPixels();
  for (let j = 0; j < width; j++) {
    for (let i = 0; i < height; i++) {
      let pix = (j + i * width) * 4
      pixels[pix + 0] = floor(next[j][i].a*255);
      pixels[pix + 1] = 0;
      pixels[pix + 2] = floor(next[j][i].b*255);
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  swap();
}

function swap() {
  let temp = grid
  grid = next;
  next = temp;
}

function laplaceA(j, i) {
  // weights
  // [0.05, 0.2, 0.05],
  // [0.2, -1, 0.2],
  // [0.05, 0.2, 0.05]
  let sumA = 0;

  sumA += grid[j-1][i-1].a * 0.05;
  sumA += grid[j][i-1].a * 0.2;
  sumA += grid[j+1][i-1].a * 0.05;
  sumA += grid[j-1][i].a * 0.2;
  sumA += grid[j][i].a * -1;
  sumA += grid[j+1][i].a * 0.2;
  sumA += grid[j-1][i+1].a * 0.05;
  sumA += grid[j][i+1].a * 0.2;
  sumA += grid[j+1][i+1].a * 0.05;

  return sumA;
}

function laplaceB(j, i) {
  let sumB = 0;

  sumB += grid[j-1][i-1].b * 0.05;
  sumB += grid[j][i-1].b * 0.2;
  sumB += grid[j+1][i-1].b * 0.05;
  sumB += grid[j-1][i].b * 0.2;
  sumB += grid[j][i].b * -1;
  sumB += grid[j+1][i].b * 0.2;
  sumB += grid[j-1][i+1].b * 0.05;
  sumB += grid[j][i+1].b * 0.2;
  sumB += grid[j+1][i+1].b * 0.05;

  return sumB;
}