class Food {
    constructor() {
        let cols = floor(width/scl);
        let rows = floor(height/scl);
        
        this.x = floor(random(cols));
        this.y = floor(random(rows));
    }

    update() {
        let cols = floor(width/scl);
        let rows = floor(height/scl);

        this.x = floor(random(cols));
        this.x.mult(scl);
        this.y = floor(random(rows));
        this.y.mult(scl);
    }

    show() {
        fill(255, 0, 100)
        rect(this.x, this.y, scl,scl)
    }


}