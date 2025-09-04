const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input[1].split(" ").map(Number)
let cnt = 0

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 2) {
        cnt++
    }

    if(cnt === 3) {
        console.log(i + 1)
        break
    }
}