const fs = require('fs')
let n =fs.readFileSync(0).toString().trim().split('\n')

let a = Number(n[0])
let arr = n[1].split(" ").map(Number)

let result = ""

for(let i = 0; i < a; i++) {
    result += arr[i]**2 + " "
}

console.log(result)