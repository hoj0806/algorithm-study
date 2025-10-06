const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

// Please Write your code here.

let answer = 0

for(let i = x; i <= y; i++) {
    let str = [...String(i)].sort()
    let x = str[0]
    let y = str[str.length - 1]

    let p1 = str.filter(i => i === x).length
    let p2 = str.filter(i => i === y).length

    if((p1 === 1 && p2 === str.length - 1) || (p2 === 1 && p1 === str.length - 1)) {
        answer++
    }
}

console.log(answer)