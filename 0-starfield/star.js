class Star {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z
      }
    
      move() {
        this.z--;
        if (this.z == 1) {
            this.z = width;
        }
      }
    
      show() {
        stroke(255);
        let sx = map(this.x/this.z, 0, 1, 0, width)
        let zy = map(this.y/this.z, 0, 1, 0, height)
        ellipse(this.x, this.y, 8, 8)
      }
    }