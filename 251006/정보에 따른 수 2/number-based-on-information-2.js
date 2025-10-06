const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));
// Please Write your code here.

let sA = []
let nA = []

for(let i = 0; i < snData.length; i++) {
    let [str, n] = snData[i]
    n = Number(n)
    if(str === 'S') {
        sA.push(n)
    } else {
        nA.push(n)
    }
}

let answer = 0

for(let i = a; i <= b; i++) {
    let x = sA.sort((a, b) => Math.abs(i - a) - Math.abs(i - b))[0]
    let y = nA.sort((a, b) => Math.abs(i - a) - Math.abs(i - b))[0]
    if(Math.abs(i-x) <= Math.abs(i-y)) answer++
}

console.log(answer)