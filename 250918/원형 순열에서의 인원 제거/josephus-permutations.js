const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
// Please Write your code here.

const MAX_SIZE = 5001
class Queue {
    constructor() {
        this.q = Array(MAX_SIZE).fill(0)
        this.head = 0
        this.tail = 0
    }

    push(item) {
        this.tail = (this.tail + 1) & MAX_SIZE
        this.q[this.tail] = item
        console.log(this.tail)
    }
    pop() {
        this.head = (this.head + 1) & MAX_SIZE
        return this.q[this.head]
    }

    front() {
        return this.q[(this.head + 1) % MAX_SIZE]
    }

    size() {
        return (this.tail - this.head + MAX_SIZE) & MAX_SIZE
    }
}

let queue = new Queue()

for(let i = 1; i <= n; i++) {
    queue.push(i)
}
console.log(queue)

// while(true) {
//     if(queue.size() === 1) {
//         console.log(queue.pop())
//         break
//     }

//     for(let i = 1; i < k; i++) {
//         queue.push(queue.front())
//         queue.pop()
//     }
//     queue.pop()
// }
