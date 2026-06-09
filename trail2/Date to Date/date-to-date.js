const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let result = 0

let totalDays1 = 0
let totalDays2 = 0


for (let i = 1; i < m1; i++) {
    totalDays1 += num_of_days[i]
}

for (let i = 1; i < m2; i++) {
    totalDays2 += num_of_days[i]
}

totalDays1 += d1
totalDays2 += d2

console.log(totalDays2 - totalDays1 + 1)