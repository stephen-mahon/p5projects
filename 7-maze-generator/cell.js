class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        // top, right, bottom, left
        this.walls = [true, true, true, true];
    }

    show() {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        // top
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        // right
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        // bottom
        if (this.walls[2]) { 
            line(x + w, y + w, x, y + w);
        }
        //left
        if (this.walls[3]) {
            line(x, y+  w, x, y)
        }   
    }
}