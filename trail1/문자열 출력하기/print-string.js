const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

for(let i = 1; i <= Number(f); i++) {
    console.log("LeebrosCode")
}