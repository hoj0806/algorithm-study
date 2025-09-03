const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])

let find = input.pop()

let sum = 0
let cnt = 0
for(let i = 1; i <= n; i++) {
    let str = input[i]
    if(str[0] === find) {
        sum+=str.length
        cnt+=1
    }
}


console.log(cnt, (sum / cnt).toFixed(2))