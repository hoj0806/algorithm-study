const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
// Please Write your code here.

class Queue {
    constructor(maxSize = 5000) {
        this.q = []
        this.maxSize = maxSize
        this.head = 0
        this.tail = 0
        this.count = 0
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

    front() {
        return this.q[(this.head + 1) % this.maxSize]
    }

    size() {
        return this.count
    }
}

let q = new Queue()


for (let i = 1; i <= n; i++) {
    q.push(i)
}

let answer = ''
while (q.size() !== 0) {
    for (let i = 1; i < k; i++) {
        q.push(q.pop())
    }
    answer += q.pop() + " "

}

console.log(answer.trim())


