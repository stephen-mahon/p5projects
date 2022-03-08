class Bullet {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    show() {
        noStroke();
        fill(255, 10, 0);
        ellipse(this._x, this._y, 5, 5);
    }

    move() {
        this._y -= 1;
    }
 }