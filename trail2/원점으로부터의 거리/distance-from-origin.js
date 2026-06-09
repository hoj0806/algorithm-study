const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.

class Point {
    constructor(x, y, index) {
        this.x = x
        this.y = y
        this.index = index
    }
}


let k = points.map(([x, y], i) => new Point(x, y, i + 1))
    .sort((a, b) => {
        let lx = Math.abs(a.x) + Math.abs(a.y)
        let ly = Math.abs(b.x) + Math.abs(b.y)
        if (lx !== ly) {
            return lx - ly
        } else {
            return a.index - b.index
        }

    }).forEach((i) => console.log(i.index))

