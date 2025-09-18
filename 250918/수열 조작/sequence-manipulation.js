const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// Please Write your code here.

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}


class Deque {
    constructor() {
        this.head = null
        this.tail = null
        this.count = 0
    }

    pushBack(data) {
        let newNode = new Node(data)
        if(this.count === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.count++
    }

    popFront() {
        let x = this.head
        if(this.count === 1) {
            this.head = null
            this.tail = null
        } else {
            x.prev = null
            this.head = x.next
        }
        this.count--
        return x.value
    }

    size() {
        return this.count
    }
}
let d = new Deque()

for(let i = 1; i <= n; i++) {
    d.pushBack(i)
}

while(true) {
    if(d.size() === 1) {
        console.log(d.head.value)
        break
    }
    d.popFront()
    d.pushBack(d.popFront())
}