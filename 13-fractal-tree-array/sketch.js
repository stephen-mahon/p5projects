let angle = 0;
let tree = [];

function setup() {
  createCanvas(400, 400);
  let a = createVector(width/2, height);
  let b = createVector(width/2, height-100);
  let root = new Branch(a, b);

  tree[0] = root;
  let newBranch = root.branch()
  tree[1] = newBranch;
}

function draw() {
  background(51);
  for(let i = 0; i < tree.length; i++){
    tree[i].show();
  }
}