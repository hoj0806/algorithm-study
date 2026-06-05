const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let s = f[1]


let arr = f.split("")

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === s) arr[i] = arr[0]
}

console.log(arr.join(""))