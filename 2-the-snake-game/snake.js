class Snake {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xs = 1;
        this.ys = 0;
    }

    update() {
        this.x += this.xs * scl;
        this.y += this.ys * scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }

    show() {
        fill(255);
        rect(this.x, this.y, scl, scl);
    }

    dir(x, y) {
        this.xs = x;
        this.ys = y;
    }
}