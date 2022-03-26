class Food {
    constructor() {
        let cols = floor(width/scl);
        let rows = floor(height/scl);
        
        this.position = createVector(floor(random(cols))*scl,floor(random(rows))*scl)

    }

    update() {
        let cols = floor(width/scl);
        let rows = floor(height/scl);
        
        this.position.x = floor(random(cols))*scl;
        this.position.y = floor(random(rows))*scl;
    }

    show() {
        fill(255, 0, 100)
        rect(this.position.x, this.position.y, scl,scl)
    }


}