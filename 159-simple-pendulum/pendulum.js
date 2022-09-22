class Pendulum {

    constructor(x, y, r){
        this.origin = createVector(x, y);
        this.position = createVector();
        this.r = r;
        this.angle = PI/4

        this.angleV = 0.0;
        this.angleA = 0.0;
        this.damping = 0.995;
        this.bobR = 64;
    }

    update() {
        let gravity = 0.4;
        this.angleA = (-1 * gravity / this.r) * sin(this.angle);
        this.angleV += this.angleA;
        this.angleV *= this.damping;
        this.angle += this.angleV;
    }

    display() {
        this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
        this.position.add(this.origin);

        stroke(255);
        strokeWeight(2);
        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        ellipseMode(CENTER)
        fill(177);
        ellipse(this.position.x, this.position.y, this.bobR, this.bobR);
    }
}