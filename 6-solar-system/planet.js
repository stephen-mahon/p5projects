class Planet {
    constructor(r, d, o) {
        this.r = r;
        this.theta = random(TWO_PI);
        this.d = d;
        this.planets = [];
        this.orbitSpeed = o;
    }

    spawnPlanets(num, level) {
        for (let i = 0; i < num; i++) {
            let r = random(0.1*this.r, 0.5*this.r)/level;
            let d = random(2.1*this.r, 5*this.r)/level;
            let o = this.orbitSpeed = random(0.001, 0.01);
            this.planets.push(new Planet(r, d, o));
            if (level < 3) {
                let nume = Math.floor(random(0, 3));
                this.planets[i].spawnPlanets(num, level+1);
            }
        }
    }

    orbit(){
        this.theta += this.orbitSpeed;
        for (let planet of this.planets) {
            planet.orbit();
        }
    }
    show() {
        push();
        fill(255, 100);
        rotate(this.theta);
        translate(this.d, 0);
        ellipse(0, 0, this.r*2);  
        for (let planet of this.planets) {
            planet.show();
        }
        pop();
    }
}