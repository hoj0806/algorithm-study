const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.

let aD = []
let bD = []

let aStart = 0
let bStart = 0
for(let i = 0; i < aData.length; i++) {
    let [v, t] = aData[i]

    for(let j = 1; j <= t; j++) {
        aStart+=v
        aD.push(aStart)
    }
}

for(let i = 0; i < bData.length; i++) {
    let [v, t] = bData[i]

    for(let j = 1; j <= t; j++) {
        bStart+=v
        bD.push(bStart)
    }
}

let answer = 0
let forward = ''

for(let i = 0; i < aD.length; i++) {
    let a = aD[i]
    let b = bD[i]
    if(a !== b) {
        if(forward === '') {
            if(a > b) {
                forward = 'a'
            } else {
                forward = 'b'
            }
        } else {
            if(forward === 'a') {
                if(b > a) {
                    answer++
                    forward = 'b'
                }
            } else {
                if(a > b) {
                    answer++
                    forward = 'a'
                }
            }
        }
    }
}

console.log(answer)