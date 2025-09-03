const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = []
for(let i = 0; i < input.length; i++) {
    let l = input[i]

    if(l % 3 === 0) {
        break
    } else {
        arr.push(l)
    }
}

console.log(arr[arr.length - 1])