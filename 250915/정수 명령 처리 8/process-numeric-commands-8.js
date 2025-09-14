const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.nodeNum = 0
    }

    pushFront(newData) {
        let newNode = new Node(newData)
        newNode.next = this.head
        if(this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            this.head = newNode
        }
        newNode.prev = null

        this.nodeNum +=1;
    }

    pushBack(newData) {
        let newNode = new Node(newData)
        newNode.prev = this.tail
        if(this.tail === null) {
            this.tail = newNode
            this.head = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        newNode.next = null

        this.nodeNum +=1
    }

    popFront() {
        console.log(this.head.data)
       if(this.head.next === null) {
            this.head = null
            this.tail = null
            this.nodeNum = 0
       } else {
            const temp = this.head
            temp.next.prev = null
            this.head = temp.next
            temp.next = null

            this.nodeNum -= 1
   
              
       }
    }

    popBack() {
        console.log(this.tail.data)
        if(this.tail.prev === null) {
            this.head = null
            this.tail = null
            this.nodeNum = 0
       } else {
            let temp = this.tail
            temp.prev.next = null
            this.tail = temp.prev
            temp.prev = null

           
            this.nodeNum -= 1
        }
            
    }


    size() {
        console.log(this.nodeNum)
    }

    empty() {
        console.log(this.nodeNum === 0 ? 1 : 0)
    }

    front() {
        console.log(this.head.data)
    }

    back() {
        console.log(this.tail.data)
    }
}

let double = new DoubleLinkedList()
for(let i = 0; i < commands.length; i++) {
    let c = commands[i].split(" ")
    if(c[0] === 'push_front') {
        double.pushFront(Number(c[1]))
    } else if(c[0] === 'push_back') {
        double.pushBack(Number(c[1]))
    } else if(c[0] === 'pop_front') {
        double.popFront()
    } else if(c[0] === 'pop_back') {
        double.popBack()
    } else if(c[0] === 'size') {
        double.size()
    } else if(c[0] === 'empty') {
        double.empty()
    } else if(c[0] === 'front') {
        double.front()
    } else if(c[0] === 'back') {
        double.back()
    }
   
}
