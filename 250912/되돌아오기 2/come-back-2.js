const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
// Please Write your code here.

let x = 0
let y = 0

let dx = [1, 0, -1, 0]
let dy = [0, -1 , 0, 1]

let dirNum = 3
let cnt = 0
let answer = -1
for(let i = 0; i < commands.length; i++) {
    let c = commands[i]
    cnt++
    if(c === 'R') {
        dirNum = (dirNum + 1) % 4
    } else if(c === 'L') {
        dirNum = (dirNum + 3) % 4
    } else {
           x += dx[dirNum]
           y += dy[dirNum]
           if(x === 0 && y === 0) {
                answer = cnt
                break
           }
    }   
}

console.log(answer)

