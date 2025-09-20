const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.



function countDay(m, d) {
    let days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let totalDay = 0

    for(let i = 0; i < m; i++) {
        totalDay+=days[i]
    }

    totalDay+=d

    return totalDay
}

let diff = countDay(m2, d2) - countDay(m1, d1)

console.log(diff % 7)