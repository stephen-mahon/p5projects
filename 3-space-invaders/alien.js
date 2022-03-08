class Alien {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    show() {
        noStroke();
        fill(255, 0, 200);
        ellipse(this._x, this._y, 60, 60);
    }
 }