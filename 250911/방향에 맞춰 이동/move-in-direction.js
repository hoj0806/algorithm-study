const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.

let x = 0
let y = 0

let dx = [1, 0, -1 , 0]
let dy = [0, -1, 0, 1]
for(let i = 0; i < moves.length; i++) {
    let [f , n] = moves[i].split(" ")
    n = Number(n)
    if(f === 'E') {
        x += n * dx[0]
    } else if(f === 'S') {
        y += n * dy[1]
    } else if(f  === 'W') {
        x += n * dx[2]
    } else {
        y += n * dy[3]
    }
}

console.log(x, y)
