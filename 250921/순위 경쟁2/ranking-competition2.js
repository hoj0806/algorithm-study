const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const changes = input.slice(1).map(line => line.split(" "));

// Please Write your code here.

let rank = [0, 0]
let honor = ''
let cnt = 0
for(let i = 0; i < changes.length; i++) {
    let [c, n] = changes[i]
    let winner = ''
    n = Number(n)
    if(c === 'A') {
        rank[0]+=n
    } else {
        rank[1]+=n
    }

    if(rank[0] > rank[1]) {
        winner = 'A'
    } else if(rank[1] > rank[0]) {
        winner = 'B'
    }
    
    if(winner !== honor) {
        honor = winner
        cnt+=1
    }
}

console.log(cnt)