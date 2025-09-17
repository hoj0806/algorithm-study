const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

class Stack {
    constructor() {
        this.stack = []
    }

    push(data) {
        this.stack.push(data)
    }

    pop() {
        console.log(this.stack.pop())
    }

    size() {
        console.log(this.stack.length)
    }

    empty() {
        console.log(this.stack.length === 0 ? 1 : 0)
    }

    top() {
        console.log(this.stack[this.stack.length - 1])
    }
}

let stack = new Stack()


for(let i = 0; i < commands.length; i++) {
    let [c, n] = commands[i].split(" ")

    if(c === 'push') {
        stack.push(n)
    } else if(c === 'size') {
        stack.size()
    } else if(c === 'empty') {
        stack.empty()
    } else if(c === 'pop') {
        stack.pop()
    } else if(c === 'top') {
        stack.top()
    }
}