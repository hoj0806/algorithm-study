const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));
// Please Write your code here.

let cups = [0, 0, 0]

function change(n, m) {
    [cups[n - 1], cups[m - 1]] = [cups[m - 1], cups[n - 1]]
}

let max =[0, 0]


for(let i = 0; i < cups.length; i++) {
    let cnt = 0
    cups[i] = 1
    for(let j = 0; j < commands.length; j++) {
        let [x, y, z] = commands[j]
        change(x, y)
        if(cups[z-1] === 1) {
            cnt++
        }
        
    }
    if(cnt > max[1]) {
        max = [i+1, cnt]
    }
     cups = [0, 0, 0]
}

console.log(max[1])