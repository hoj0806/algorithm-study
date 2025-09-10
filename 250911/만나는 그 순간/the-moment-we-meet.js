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

let x = [0]
let y = [0]
let startX = 0
let startY = 0

for(let i = 0; i < movesA.length; i++) {
    let [c, n] = movesA[i]
    
    if(c === 'R') {
        for(let j = 0; j <= n - 1; j++) {
            startX++
            x.push(startX)
        }
    } else {
        for(let j = 0; j <= n - 1; j++) {
            startX--
            x.push(startX)
        }
    }
}

for(let i = 0; i < movesB.length; i++) {
    let [c, n] = movesB[i]
    
    if(c === 'R') {
        for(let j = 0; j <= n - 1; j++) {
            startY++
            y.push(startY)
        }
    } else {
        for(let j = 0; j <= n - 1; j++) {
            startY--
            y.push(startY)
        }
    }
}

for(let i = 1; i < x.length; i++) {
    if(x[i] === y[i]) {
        console.log(i)
        break
    }
    if(i === x.length - 1) {
        console.log(-1)
    }
}


