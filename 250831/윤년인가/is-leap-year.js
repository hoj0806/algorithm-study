const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let year = Number(input)


if(year % 4 === 0) {
    if(year % 100 === 0 && year % 400 !== 0) {
        console.log(false)
    } else {
        console.log(true)
    } 
        console.log(true)
    
} else {
    console.log(false)
}