class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }

    show() {
        let x = this.i * scl;
        let y = this.j * scl;
        stroke(255);
        noFill();
        line(x, y, x+scl,y);
        line(x+scl, y, x, y+scl);
        line(x, y+scl, x, y);
    }
}