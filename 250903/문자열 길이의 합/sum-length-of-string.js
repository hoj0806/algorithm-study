const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])

let cnt = 0
let sum = 0

for(let i = 1; i <= n; i++) {
    let str = input[i]
    sum += input[i].length
    if(str.indexOf("a") !== -1) {
        cnt+=1
    }
}

console.log(sum, cnt)