const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = input

let rseultA , resultB
if(a <= b && a <= c) {
    rseultA = 1
} else {
    rseultA = 0
}

if((a === b) && (b === c)) {
    rseultB = 1
} else {
    rseultB = 0
}

console.log(rseultA, rseultB)