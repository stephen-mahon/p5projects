class Snake {
    constructor(){
        this.position = createVector(0,0)
        this.speed = createVector(1,0)
        this.total = 0;
        this.tail = [];
    }

    update() {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.position.x, this.position.y);

        this.position.x += this.speed.x * scl;
        this.position.y += this.speed.y * scl;

        this.position.x = constrain(this.position.x, 0, width-scl);
        this.position.y = constrain(this.position.y, 0, height-scl);
    }

    eat(x,y) {
        let d = dist(this.position.x, this.position.y, x, y);
        if (d < 1){
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    show() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.position.x, this.position.y, scl, scl);
    }

    dir(x, y) {
        this.speed = createVector(x,y);
    }
}