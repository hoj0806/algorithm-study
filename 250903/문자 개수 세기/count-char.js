const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input[0].split("")
let str = input[1]

let cnt = 0

for(let i = 0; i < arr.length; i++) {
    let s = arr[i]
    if(s === str) {
        cnt++
    }
}

console.log(cnt)