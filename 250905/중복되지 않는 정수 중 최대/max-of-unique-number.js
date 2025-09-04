const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input[1].split(" ").map(Number)

let count = Array(1000).fill(0)

let answer = -1
let maxValue = 0

for(let i = 0; i < arr.length; i++) {
    count[arr[i]]+=1
}

for(let i = 0; i < count.length; i++) {
    if(count[i] === 1 && i > maxValue) {
        maxValue = i
    }
}


console.log(maxValue === 0 ? -1 : maxValue)
