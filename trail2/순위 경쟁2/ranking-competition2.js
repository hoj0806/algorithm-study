const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const changes = input.slice(1).map(line => line.split(" "));

// Please Write your code here.


let score1 = 0
let score2 = 0

let rank = 'AB'
let best = ''
let cnt = 0

for (let i = 0; i < n; i++) {
    let c = changes[i]
    let [p, n] = c
    n = Number(n)
    if (p === 'A') {
        score1 += n
    } else {
        score2 += n
    }
    if (score1 > score2) {
        best = 'A'
    } else if (score2 > score1) {
        best = 'B'
    } else {
        best = 'AB'
    }

    if (rank !== best) {
        cnt++
    }

    rank = best

}

console.log(cnt)
