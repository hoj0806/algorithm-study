const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

let segment = Array(3000).fill(0)

let idx = 1500

for(let i = 0; i < commands.length; i++) {
    let [n, c] = commands[i].split(" ")
    n = Number(n)

    if(c === 'R') {
        for(let j = idx; j <= idx + n - 1; j++) {
            segment[j]+=1
        }
        idx+=n
    } else {
        for(let j = idx; j >= idx - n + 1; j--) {
            segment[j]+=1
        }
        idx-=n
    }
}

console.log(segment.filter((i) => i > 1).length)