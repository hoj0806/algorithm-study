const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let arr = f.sort((a, b) => a.length - b.length)

console.log(arr[2].length - arr[0].length)