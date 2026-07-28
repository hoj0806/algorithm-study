const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.


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

    empty() {
        return this.size() === 0 ? 1 : 0
    }

    front() {
        return this.q[this.head + 1]
    }
}

let q = new Queue()

for (let i = 0; i < n; i++) {
    let [c, n] = commands[i].split(" ")
    n = Number(n)
    if (c === "push") {
        q.push(n)
    } else if (c === "front") {
        console.log(q.front())
    } else if (c === "size") {
        console.log(q.size())
    } else if (c === "empty") {
        console.log(q.empty())
    } else {
        console.log(q.pop())
    }
}