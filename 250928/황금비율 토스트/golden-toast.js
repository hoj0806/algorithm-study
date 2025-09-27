const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let str = input[1]
let commands = input.slice(2)



class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.END = new Node(-1)
        this.head = this.END
        this.tail = this.END
    }
    
    // 원소 맨 앞으로 넣기
    pushFront(newData) {
        let newNode = new Node(newData)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        newNode.prev = null
    }

    // 원소 맨 뒤로 넣기
    pushBack(newData) {
        if(this.begin() === this.end()) {
            this.pushFront(newData)
        } else {
         let newNode = new Node(newData)
            newNode.prev = this.tail.prev
            this.tail.prev.next = newNode
            newNode.next = this.tail
            this.tail.prev = newNode

        }
    }

    erase(node) {
        const nextNode = node.next
        if(node === this.begin()) {
            const temp = this.head
            temp.next.prev = null
            this.head = temp.next
            temp.next = null
        } else {
            node.prev.next = node.next
            node.next.prev = node.prev
            node.prev = null
            node.next = null
        }
        
        return nextNode
    }

    insert(node, newData) {
        if(node === this.end()) {
            this.pushBack(newData)
        } else if(node === this.begin()) {
            this.pushFront(newData)
        } else {
            const newNode = new Node(newData)
            newNode.prev = node.prev
            newNode.next = node
            node.prev.next = newNode
            node.prev = newNode
        }
    }

    begin() {
        return this.head
    }

    end() {
        return this.tail
    }
}


let l = new DoublyLinkedList()

for(let i = 0; i < str.length; i++) {
    l.pushBack(str[i])
}
let it = l.tail

for(let i = 0; i < commands.length; i++) {
    let [c, str] = commands[i].split(" ")
    if(c === 'L') {
        if(it !== l.begin()) {
            it = it.prev
        }
    } else if(c === 'R') {
        if(it !== l.end()) {
            it = it.next
        }
    } else if(c === 'D') {
        if(it !== l.end()) {
            it = l.erase(it)
        }
    } else if(c ==='P') {
         l.insert(it, str)
    }
}

let start = l.head
while(true) {
    if(start === l.end()) {
        break
    }
    process.stdout.write(start.data)
    start = start.next
    
}