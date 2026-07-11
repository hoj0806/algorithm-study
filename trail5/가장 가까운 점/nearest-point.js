const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const Heap = require("collections/heap");

const [n, m] = input[0].split(" ").map(Number);
const points = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

// Please Write your code here.

class Pair {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

const pq = new Heap(null, null, (a, b) => {
    if ((a.x + a.y) !== (b.x + b.y)) {
        return (b.x + b.y) - (a.x + a.y)
    } else {
        if (a.x === b.x) {
            return b.y - a.y
        } else {
            return b.x - a.x
        }
    }
});

for (let i = 0; i < n; i++) {
    let [x, y] = points[i]
    pq.push(new Pair(x, y))
}

for (let i = 1; i <= m; i++) {
    let top = pq.pop()
    pq.push(new Pair(top.x + 2, top.y + 2))
}

console.log(pq.peek().x, pq.peek().y)



