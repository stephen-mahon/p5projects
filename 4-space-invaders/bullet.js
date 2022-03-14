class Bullet {
    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._r = 5;
    }

    show() {
        noStroke();
        fill(255, 10, 0);
        ellipse(this._x, this._y, 2*this.r);
    }

    move() {
        this._y -= 1;
    }
 }