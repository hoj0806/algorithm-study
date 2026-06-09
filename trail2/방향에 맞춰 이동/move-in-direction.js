const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.

let x = 0
let y = 0
let dx = [1, 0, -1, 0]
let dy = [0, -1, 0, 1]

for (let i = 0; i < moves.length; i++) {
  let [m, n] = moves[i].split(" ")
  n = Number(n)
  if (m === 'E') {
    x += dx[0] * n
    y += dy[0] * n
  } else if (m === 'S') {
    x += dx[1] * n
    y += dy[1] * n
  } else if (m === 'W') {
    x += dx[2] * n
    y += dy[2] * n
  } else if (m === 'N') {
    x += dx[3] * n
    y += dy[3] * n
  }
}
  console.log(x, y)
