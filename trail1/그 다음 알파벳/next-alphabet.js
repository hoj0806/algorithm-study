const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let code = f.charCodeAt(0) + 1

if(code === 123) {
    code = 97
} 


console.log(String.fromCharCode(code))