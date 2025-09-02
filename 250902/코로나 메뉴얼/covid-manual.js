const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [pA, tA] = input[0].split(" ")
let [pB, tB] = input[1].split(" ")
let [pC, tC] = input[2].split(" ")


let count = 0
if(pA === 'Y' && Number(tA) >= 37) {
    count++
}

if(pB === 'Y' && Number(tB) >= 37) {
    count++
}

if(pC === 'Y' && Number(tC) >= 37) {
    count++
}

if(count >= 2) {
    console.log('E')
} else {
    console.log('N')
}