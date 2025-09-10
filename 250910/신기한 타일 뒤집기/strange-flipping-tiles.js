const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

let arr = Array(300000).fill(0)

let idx = 150000

for(let i = 0; i < commands.length; i++) {
    let [n, c] = commands[i].split(" ")
    if(c === 'R') {
        for(let i = idx; i <= idx + Number(n) - 1; i++) {
            arr[i] = "B"
        }
        idx+=Number(n) - 1
    } else {
        for(let i =idx; i >= idx - Number(n) + 1; i--) {
            arr[i] = "W"
        }
        idx-=Number(n) - 1
    }

}

let white = arr.filter((i) => i === 'W').length
let black = arr.filter((i) => i === 'B').length

console.log(white, black)