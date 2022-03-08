let ship;
let aliens = [];
let totalAliens = 8;
var bullets = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  bullets = new Bullet(width/2, height/2);
  for (var i = 0; i < totalAliens; i++) {
    let alienSpacer = i*width/totalAliens+width/(2*totalAliens)
    aliens[i] = new Alien(alienSpacer, 60);
  }
  
}

function draw() {
  background(51);
  ship.show();
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show();
  }
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move()
  }
  
 
}
// uncaught error with push to array
function keyPressed() {
  if (keyCode = ' ') {
    var bullet = new Bullet(width/2, height/2);
    bullets.push(bullet);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
}
