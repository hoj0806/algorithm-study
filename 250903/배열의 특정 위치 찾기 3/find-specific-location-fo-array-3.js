const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let arr = []

for(let i = 0; i < input.length; i++) {
    let k = input[i]
    if(k === 0) {
        break
    } else {
        arr.push(k)
    }
}


console.log(arr.slice(-3).reduce((a, c) => a + c))