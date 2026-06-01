const fs = require('fs')
let n = fs.readFileSync(0).toString().trim().split(" ")

let arr = []

for(let i = n.length -1; i >= 0; i--) {
    arr.push(n[i])
}

console.log(arr.join(""))