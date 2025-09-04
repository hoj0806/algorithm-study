const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let code = input.charCodeAt(0)

let prevCode = code - 1

if(prevCode < 97) {
    prevCode += 26
}
console.log(String.fromCharCode(prevCode))