const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// Please Write your code here.

let answer = 0

function findMin(p1, p2) {
    let diff = Math.abs(p1 - p2)
    return Math.min(diff, n - diff)
}

function isOpen(q,w,e,r,t,y) {
    let p1 = findMin(q, r)
    let p2 = findMin(w, t)
    let p3 = findMin(e, y)
    return p1 <= 2 && p2 <= 2 && p3 <= 2
}

for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        for(let k =1; k <= n; k++) {
            if(isOpen(i, j, k, a, b, c) || isOpen(i, j, k, a2, b2, c2)) answer++    
        }
    }
}

console.log(answer)