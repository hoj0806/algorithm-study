const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.

const MAX_SIZE = 10001  

class Queue {
    constructor() {
        this.q = Array(MAX_SIZE).fill(0)
        this.head = 0
        this.tail = 0
    }

    push(item) {
        this.tail = (this.tail + 1) % MAX_SIZE;
        this.q[this.tail] = item
    }

    pop() {
        this.head = (this.head + 1) % MAX_SIZE;
        console.log(this.q[this.head])
    }


    empty() {
       console.log(this.head === this.tail ? 1 : 0)
    }

    front() {
        console.log(this.q[(this.head + 1) % MAX_SIZE])
    }

    size() {
         console.log((this.tail - this.head + MAX_SIZE) % MAX_SIZE)
    }
}

let queue = new Queue()

for(let i = 0; i < commands.length; i++) {
    let [c, n] = commands[i].split(" ")
    if(c === 'push') {
        queue.push(Number(n))
    } else if(c === 'front') {
        queue.front()
    } else if(c === 'pop') {
        queue.pop()
    } else if(c === 'empty') {
        queue.empty()
    } else if(c === 'size') {
        queue.size()
    }
}

