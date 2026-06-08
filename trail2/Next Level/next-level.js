const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.

class A {
    constructor(a = "codetree", b = 10) {
        this.a = a
        this.b = b
    }
}

class B {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}

let a = new A()
let b = new B(user_id, levelStr)

console.log(`user ${a.a} lv ${a.b}`)
console.log(`user ${b.a} lv ${b.b}`)
