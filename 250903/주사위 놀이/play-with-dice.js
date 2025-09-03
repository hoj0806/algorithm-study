const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)


let arr = Array(6).fill(0)


for(let i = 0; i < input.length; i++) {
    arr[input[i] - 1] +=1
}

for(let j = 0; j < arr.length; j++) {
    console.log(`${j + 1} - ${arr[j]}`)
}