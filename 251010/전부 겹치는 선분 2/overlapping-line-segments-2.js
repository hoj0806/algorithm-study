const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let arr = input.slice(1).map(i => i.trim().split(" ").map(Number))

let start = []
let end = []

for(let j = 1; j <= n; j++) {
    for(let i = 1; i < input.length; i++) {
        if(i !== j) {
             let [x, y] = input[i].trim().split(" ").map(Number)
             start.push(x)
             end.push(y)
        }
    }  
    if(Math.max(...start) <= Math.min(...end)) {
        console.log('Yes')
        process.exit()
    }
    start = []
    end = []
}

console.log('No')