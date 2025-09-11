const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);

let A_moves = [0];
let B_moves = [0];

let A = 0
let B = 0
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  for(let j = 1; j <= t; j++) {
    A+=v
    A_moves.push(A)
  }
}

for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  for(let j = 1; j <= t; j++) {
    B+=v
    B_moves.push(B)
  }
}

// Please Write your code here.

let f = []
let answer = 0
for(let i = 1; i < A_moves.length; i++) {
    if(A_moves[i] === B_moves[i]) {
        f.push("AB")
    } else {
        f.push(A_moves[i] > B_moves[i] ? "A" : "B")
    }
}

for(let i = 0; i < f.length; i++) {
    if(i === 0 || f[i] !== f[i - 1]) {
        answer++
    }
}

console.log(answer)