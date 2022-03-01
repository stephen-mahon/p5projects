class Star {
  constructor() {
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = random(width/2);
    this.pz = this.z
  }
    
  update() {
    this.z -= 2;
    if (this.z < 1) {
      this.x = random(-width/2, width/2);
      this.y = random(-height/2, height/2);
      this.z = random(width/2);
      this.pz = this.z
    }
  }
    
  show() {
    fill(255);
    noStroke();
    let sx = map(this.x/this.z, 0, 1, 0, width/2);
    let sy = map(this.y/this.z, 0, 1, 0, height/2);

    let r = map(this.z, 0, width/2, 8, 0);
    ellipse(sx, sy, r);

    let px = map(this.x/this.pz, 0, 1, 0, width/2);
    let py = map(this.y/this.pz, 0, 1, 0, height/2);
    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  }
}