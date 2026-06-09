const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

// Please Write your code here.

let Aspot = 0
let Bspot = 0
let resultA = []
let resultB = []

for (let i = 0; i < movesA.length; i++) {
    let [r, n] = movesA[i]
    n = Number(n)
    for (let i = 1; i <= n; i++) {
        r === "R" ? Aspot++ : Aspot--
        resultA.push(Aspot)
    }
}

for (let i = 0; i < movesB.length; i++) {
    let [r, n] = movesB[i]
    n = Number(n)
    for (let i = 1; i <= n; i++) {
        r === "R" ? Bspot++ : Bspot--
        resultB.push(Bspot)
    }
}

let answer = -1

for (let i = 0; i < resultA.length; i++) {
    if (resultA[i] === resultB[i]) {
        answer = i + 1
        break
    }
}
console.log(answer)