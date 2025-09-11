const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// Please Write your code here.

let aRobot = [0]
let bRobot = [0]
let aStart = 0
let bStart = 0

for(let i = 0; i < movesA.length; i++) {
    let [n, c] = movesA[i].split(" ")
    n = Number(n)
    
    if(c === 'R') {
        for(let i = 1; i <= n; i++) {
            aStart++
            aRobot.push(aStart)
        }
    } else {
        for(let i = 1; i <= n; i++) {
            aStart--
            aRobot.push(aStart)
        }
    }
}

for(let i = 0; i < movesB.length; i++) {
    let [n, c] = movesB[i].split(" ")
    n = Number(n)
    
    if(c === 'R') {
        for(let i = 1; i <= n; i++) {
            bStart++
            bRobot.push(bStart)
        }
    } else {
        for(let i = 1; i <= n; i++) {
            bStart--
            bRobot.push(bStart)
        }
    }
}

let answer = 0
let isSame = false

for(let i = 1; i < Math.max(aRobot.length, bRobot.length); i++) {
    if(aRobot[i] !== undefined && bRobot[i] !== undefined) {
        if(aRobot[i] === bRobot[i]) {
            if(isSame === false) answer++
            isSame = true 
        } else {
            isSame = false
        }
    } else {
        if(aRobot[i] === undefined) {
            if(aRobot[aRobot.length - 1] === bRobot[i]) {
                answer++
            }
        } else {
            if(bRobot[bRobot.length - 1] === aRobot[i]) {
                answer++
            }
        }
    }
}


if(aRobot[aRobot.length - 1] === bRobot[bRobot.length - 1]) answer--


console.log(answer)