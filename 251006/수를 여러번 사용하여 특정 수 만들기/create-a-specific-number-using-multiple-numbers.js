const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);
// Please Write your code here.

let answer = []
for(let i = 1000; i >= 0; i--) {
    for(let j = 1000; j >= 0; j--) {
        let x = a * i
        let y = b * j
        if(x + y <= c) {
          answer.push(x + y)
        }
    }
}

console.log(Math.max(...answer))