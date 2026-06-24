const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

class Stack {
    constructor() {
        this.items = []
    }

    push(data) {
        this.items.push(data)
    }

    pop() {
        return this.items.pop()
    }

    size() {
        return this.items.length
    }

    empty() {
        return this.size() === 0 ? 1 : 0
    }

    top() {
        return this.items[this.size() - 1]
    }
}

let stack = new Stack()


for(let i = 0; i < n; i++) {
    let [c, n] = commands[i].split(" ")
    n = Number(n)
    if(c === "push") {
        stack.push(n)
    } else if(c === "pop") {
        console.log(stack.pop())
    } else if(c === 'size') {
        console.log(stack.size())
    } else if(c === 'empty') {
        console.log(stack.empty())
    } else if(c === 'top') {
        console.log(stack.top())
    }
}