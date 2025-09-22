const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let graph = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0))
let visited = Array(n + 1).fill(false)

class Queue {
    constructor() {
        this.q = []
        this.head = -1
        this.tail = -1
    }

    empty() {
        return this.head === this.tail
    }

    push(item) {
        this.q.push(item)
        this.tail++
    }

    pop() {
        return this.q[++this.head]
    }
}

console.log(graph)
