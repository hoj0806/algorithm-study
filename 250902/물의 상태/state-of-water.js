const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let tem = Number(input)

if(tem < 0) {
    console.log("ice")
} else if(tem >= 100) {
    console.log('vapor')
} else {
    console.log('water')
}