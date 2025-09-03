const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

for(elem of input) {
    console.log(elem)
}