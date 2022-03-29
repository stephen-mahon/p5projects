let axiom = "A";
let sentence = axiom;

var rule1 = {
  a: "A",
  b: "AB"
}

var rule2 = {
  a: "B",
  b: "A"
}

function generate() {
  let nextSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);
    if (current == rule1.a) {
      nextSentence += rule1.b;
    } else if (current == rule2.a) {
      nextSentence += rule2.b;
    } else {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
}

function setup() {
  noCanvas();
  createP(axiom);
  var button = createButton("generate");
  button.mousePressed(generate);
}

function draw() {
  background(220);
}
