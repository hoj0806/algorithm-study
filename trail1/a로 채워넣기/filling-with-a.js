const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let arr = f.split("")

arr[1] = "a"
arr[arr.length - 2] = "a"

console.log(arr.join(""))

