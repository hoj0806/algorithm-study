const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let r = input[1].split(" ").map(Number)

let arr = []

for(let i = 0; i < n; i++) {
    if(r[i] % 2 === 0) {
        arr.push(r[i])
    }
}

console.log(arr.reverse().join(" "))