const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input[1].split(" ").map(Number)

let max = 0

for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] - arr[i] > max) {
            max = arr[j] - arr[i]
        }
    }
}

console.log(max)