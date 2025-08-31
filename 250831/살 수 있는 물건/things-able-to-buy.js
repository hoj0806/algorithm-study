const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let money = Number(input)

if(money >= 3000) {
    console.log('book')
} else if(money >= 1000) {
    console.log('mask')
} else {
    console.log('no')
}