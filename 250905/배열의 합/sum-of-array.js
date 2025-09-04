const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

for(let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ").map(Number)
    let sum = 0
    for(let j = 0; j < arr.length; j++) {
        sum+=arr[j]
    }
    console.log(sum)
}