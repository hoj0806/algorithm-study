const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

let days = [0, 31, 28, 31, 30, 31, 30 ,31 ,31, 30 ,31, 30, 31]

let a = 0
let b = 0

for(let i = 1; i <= m1; i++) {
    a+=days[i]
}
a+=d1

for(let i = 1; i <= m2; i++) {
    b+=days[i]
}
b+= d2

console.log(b - a)