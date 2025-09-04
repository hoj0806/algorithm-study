const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let answer = 0

for(let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ").map(Number)
    for(let j = 0; j <= i; j++) {
        answer+=arr[j]
    }
}

console.log(answer)