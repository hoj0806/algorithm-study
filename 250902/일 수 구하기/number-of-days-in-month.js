const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let month = Number(input)

if(month === 2) {
    console.log(28)
} else {
    if(month === 4 || month === 6 || month === 9 || month === 11) {
        console.log(30)
    } else {
        console.log(31)
    }
}