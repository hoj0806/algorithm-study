const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.

class Node {
    constructor(data) {
        this.data = data
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

    pushFront(data) {
        let newNode = new Node(data)
        if(this.count === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.count++
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
            this.head = x.next
            this.head.prev = null
        }
        this.count--
        console.log(x.data)
    }

    popBack() {
        let x = this.tail
        if(this.count === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = x.prev
            this.tail.next = null
        }
        this.count--
        console.log(x.data)
    }

    size() {
        console.log(this.count)
    }

    empty() {
        console.log(this.count === 0 ? 1 : 0)
    }

    front() {
        console.log(this.head.data)
    }

    back() {
        console.log(this.tail.data)
    }
}

let d = new Deque()

for(let i = 0; i < commands.length; i++) {
    let [c, n] = commands[i].split(" ")
    n = Number(n)
    if(c === 'push_front') {
        d.pushFront(n)
    } else if(c === 'push_back') {
        d.pushBack(n)
    } else if(c === 'pop_front') {
        d.popFront()
    } else if(c === 'pop_back') {
        d.popBack()
    } else if(c === 'size') {
        d.size()
    } else if(c === 'empty') {
        d.empty()
    } else if(c === 'front') {
        d.front()
    } else if(c === 'back') {
        d.back()
    }
}