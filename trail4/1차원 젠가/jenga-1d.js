const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let blocks = input.slice(1, n + 1).map(Number);
const [s1, e1] = input[n + 1].split(' ').map(Number);
const [s2, e2] = input[n + 2].split(' ').map(Number);

// Please write your code here.



let temp = []
let temp2 = []
for (let i = 0; i < blocks.length; i++) {
    if (i < s1 - 1 || i > e1 - 1) {
        temp.push(blocks[i])
    }
}

blocks = temp
for (let j = 0; j < blocks.length; j++) {
    if (j < s2 - 1 || j > e2 - 1) {
        temp2.push(blocks[j])
    }
}

blocks = temp2

console.log(blocks.length)
console.log(blocks.join('\n'))

