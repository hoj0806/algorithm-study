const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
// Please Write your code here.

class Queue {
    constructor() {
        this.q = []
        this.head = -1
        this.tail = -1
    }

    push(item) {
        this.q.push(item)
        this.tail++
    }

    pop() {
        return this.q[++this.head]
    }

    empty() {
        return this.head === this.tail
    }

    size() {
        return this.tail - this.head
    }

    front() {
        return this.q[this.head + 1]
    }
}

let q = new Queue()
for(let i = 1; i <= n; i++) {
    q.push(i)
}

console.log(q)