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

    size() {
        return this.tail - this.head
    }
}

let q = new Queue()

for (let i = 1; i <= n; i++) {
    q.push(i)
}

let answer = []
while (q.size() !== 0) {
    for (let i = 1; i <= k - 1; i++) {
        q.push(q.pop())
    }
    answer.push(q.pop())
}

console.log(answer.join(" "))