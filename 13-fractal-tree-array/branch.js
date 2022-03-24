class Branch {
    constructor(begin, end) {
        this.begin = begin;
        this.end = end;
    }

    show() {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    branch() {
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI / 4);
        let newEnd = p5.Vector.add(this.end, dir);
        let right = new Branch(this.end, newEnd);
        return right;
    }
}