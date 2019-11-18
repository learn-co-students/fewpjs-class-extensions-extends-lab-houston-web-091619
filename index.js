class Polygon {
    constructor(arr) {
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let one = (this.sides[0] + this.sides[1]) > this.sides[2];
        let two = (this.sides[0] + this.sides[2]) > this.sides[1];
        let three = (this.sides[1] + this.sides[2]) > this.sides[0];
        return one && two && three;
    }
}

class Square extends Polygon {
    get isValid() {
        for (let i = 0; i < this.sides.length; i++) {
            if (this.sides[i] != this.sides[0]) {
                return false;
            }
        }
        return true;
    }

    get area() {
        return Math.pow(this.sides[0], 2);
    }
}

