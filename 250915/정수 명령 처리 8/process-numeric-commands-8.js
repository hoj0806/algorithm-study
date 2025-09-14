const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

class Node {
    constructor(data) {
        this.data = data
        this.head = null
        this.tail = null
    }
}

for(let i = 0; i < commands.length; i++) {
    let c = commands[i].split(" ")
    console.log(c)
}