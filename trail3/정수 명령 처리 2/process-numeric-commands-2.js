const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.

class Queue {
    constructor(maxSize = 10000) {
        this.q = []
        this.count = 0
        this.maxSize = maxSize
        this.head = 0
        this.tail = 0
    }

    push(item) {
        this.tail = (this.tail + 1) % this.maxSize
        this.q[this.tail] = item
        this.count++
    }

    pop() {
        this.head = (this.head + 1) % this.maxSize
        this.count--
        return this.q[this.head]
    }

    size() {
        return this.count
    }

    empty() {
        return this.count === 0 ? 1 : 0
    }

    front() {
        return this.q[(this.head + 1) % this.maxSize]
    }
}

let q = new Queue()

for (let i = 0; i < n; i++) {
    let [c, n] = commands[i].split(" ")
    if (c === "push") {
        q.push(n)
    } else if (c === 'pop') {
        console.log(q.pop())
    } else if (c === 'size') {
        console.log(q.size())
    } else if (c === 'empty') {
        console.log(q.empty())
    } else if (c === 'front') {
        console.log(q.front())
    }
}