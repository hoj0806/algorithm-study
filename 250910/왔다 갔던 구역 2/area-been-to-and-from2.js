const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

let segments = Array(3000).fill(0)
let startIndex = 1500

for(let i = 0; i< commands.length; i++) {
    let [n, c] = commands[i].split(" ")
    if(c === 'R') {
        for(let i = startIndex; i <= startIndex + Number(n) - 1; i++) {
                segments[i]++
        }
        startIndex+=Number(n)
    } else {
        for(let i = startIndex; i >= startIndex - Number(n) + 1; i--) {
            segments[i]++
            
        }
        startIndex-=Number(n)
    }
}

console.log(segments.filter((i) => i > 1).length)