const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let money = Number(input)

let book = 3000
let mask = 1000
let pen = 500

if(money >= book) {
    console.log('book')
} else if(money >= mask) {
    console.log("mask")
} else if(money >= pen) {
    console.log('pen')
} else {
    console.log('no')
}