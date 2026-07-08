const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

// Please Write your code here.


let set1 = new Set(A)
let set2 = new Set(B)


for (let i = 0; i < m; i++) {
    if (set1.has(B[i])) {
        set1.delete(B[i])
    }
}

for (let i = 0; i < n; i++) {
    if (set2.has(A[i])) {
        set2.delete(A[i])
    }
}



let set3 = new Set([...set1, ...set2])

console.log(set3.size)