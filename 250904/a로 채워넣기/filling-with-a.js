const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let arr = input.split("")

arr[1] = "a"
arr[arr.length - 2] = "a" 

console.log(arr.join(""))