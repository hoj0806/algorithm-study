const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

// node 클래스 정의

class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.nodeNum = 0
    }

    push_front(data) {
        let newNode = new Node(data)
        if (this.empty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.nodeNum += 1
    }

    push_back(data) {
        let newNode = new Node(data)

        if (this.empty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.nodeNum += 1
    }

    pop_front() {
        if (this.empty()) return null

        const removedData = this.head

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }

        this.nodeNum -= 1

        return removedData
    }

    pop_back() {
        if (this.empty()) return null

        const removedData = this.tail

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }

        this.nodeNum -= 1

        return removedData

    }

    front() {
        return this.empty() === 1 ? null : this.head
    }

    back() {
        return this.empty() === 1 ? null : this.tail
    }

    size() {
        return this.nodeNum
    }


    empty() {
        return this.nodeNum === 0 ? 1 : 0
    }
}

let list = new DoublyLinkedList()


for (let i = 0; i < n; i++) {
    let [c, n] = commands[i].split(" ")
    n = Number(n)

    if (c === "push_front") {
        list.push_front(n)
    } else if (c === "push_back") {
        list.push_back(n)
    } else if (c === "pop_front") {
        console.log(list.pop_front().data)
    } else if (c === "pop_back") {
        console.log(list.pop_back().data)
    } else if (c === 'size') {
        console.log(list.size())
    } else if (c === "empty") {
        console.log(list.empty())
    } else if (c === "front") {
        console.log(list.front().data)
    } else if (c === "back") {
        console.log(list.back().data)
    }
}

