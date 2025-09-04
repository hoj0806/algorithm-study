const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let cnt = 0
let arr = []
for(let i = 0; i < input.length; i++) {
    let str = input[i]
    if(str === "0") {
        break
    }
    cnt+=1
    if((i + 1) % 2 !== 0) {
        arr.push(str)
    }
}

console.log(cnt)
console.log(arr.join('\n'))