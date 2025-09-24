const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input[1].split(" ").map(Number)

let max = 0

for(let i = 0; i < arr.length; i++) {
    let n =arr[i]
    if(n > max) {
        max = n
    }
}

let maxIndex = arr.indexOf(max)
console.log(maxIndex)