const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

// Please Write your code here.

class P {
    constructor(name, b1, c1) {
        this.name = name
        this.b1 = b1
        this.c1 = c1
    }
}
let arr = []

for (let i = 0; i < personLines.length; i++) {
    let [a, b, c] = personLines[i].split(" ")
    arr.push(new P(a, b, c))
}


let z = arr.sort((a, b) => b.name.localeCompare(a.name) - a.name.localeCompare(b.name))

console.log(`name ${z[0].name}`)
console.log(`addr ${z[0].b1}`)
console.log(`city ${z[0].c1}`)
