class Vec {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(another) {
        return new Vec(this.x + another.x, this.y + another.y);
    }

    minus(another) {
        return new Vec(this.x - another.x, this.y - another.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

}

console.log(new Vec(1, 1).length)
console.log(new Vec(1, 2).plus(new Vec(-1, -2)))