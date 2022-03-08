class Ship {
    constructor() {
        this._x = width/2;
    }

    show() {
        noStroke();
        fill(255);
        rectMode(CENTER)
        rect(this._x, height-20, 20, 60);
    }

    move(dir) {
        this._x += dir*5;
    }
}