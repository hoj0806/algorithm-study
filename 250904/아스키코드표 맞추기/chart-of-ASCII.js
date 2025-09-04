const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

for(let i = 0; i < input.length; i++) {
    console.log(String.fromCharCode(input[i]))
}