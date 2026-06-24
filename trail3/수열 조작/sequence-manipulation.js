const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// Please Write your code here.

class Deque {
    constructor(maxSize = 500000) {
        this.dq = [];
        this.maxSize = maxSize;
        this.count = 0;
        this.head = 0;
        this.tail = 0;
    }

    push_back(item) {
        this.tail = (this.tail + 1) % this.maxSize;
        this.dq[this.tail] = item;
        this.count++;
    }

    pop_front() {
        this.head = (this.head + 1) % this.maxSize;
        const item = this.dq[this.head];
        this.count--;
        return item;
    }

    push_front(item) {
        this.dq[this.head] = item;
        this.head = (this.head - 1 + this.maxSize) % this.maxSize;
        this.count++;
    }

    pop_back() {
        const item = this.dq[this.tail];
        this.tail = (this.tail - 1 + this.maxSize) % this.maxSize;
        this.count--;
        return item;
    }

    size() {
        return this.count;
    }

    empty() {
        return this.count === 0 ? 1 : 0;
    }

    front() {
        return this.dq[(this.head + 1) % this.maxSize];
    }

    back() {
        return this.dq[this.tail];
    }
}

let deque = new Deque()

for(let i = 1; i <= n; i++) {
    deque.push_back(i)
}



while(deque.size() !== 1) {
    deque.pop_front()
    deque.push_back(deque.pop_front())
}

console.log(deque.front())