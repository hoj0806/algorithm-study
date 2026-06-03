const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let s = Number(f)
let result = ''

while(s <= 100) {
    if(s >= 90) {
        result += "A " 
    } else if(s >= 80) {
        result += "B "
    } else if(s >= 70) {
        result += "C "
    } else if(s >= 60) {
        result += "D "
    } else {
        result += "F "
    }

    s++
}

console.log(result.trim())