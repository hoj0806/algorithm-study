const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const len = days.length
const k = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
let days1 = d1
let days2 = d2

for (let i = 0; i < len; i++) {
    if (i < m1) days1 += days[i]
    if (i < m2) days2 += days[i]
}

const left = days2 - days1


if (left < 0) {
    console.log(k.slice(left % 7)[0])
} else {
    console.log(k[left % 7])
}