const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()


let a = input.includes("ee") === true ?  "Yes" : "No"
let b = input.includes("ab") === true ?  "Yes" : 'No'

console.log(a, b)