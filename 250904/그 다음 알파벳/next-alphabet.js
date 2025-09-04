const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()


let code = input.charCodeAt(0)

let nextCode = code + 1

if(nextCode > 122) {
    nextCode-=26
}

console.log(String.fromChaRCode(nextCode))