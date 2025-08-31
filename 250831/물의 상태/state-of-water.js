const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let temperature = Number(input)

if(temperature < 0) {
    console.log('ice')
} else if(temperature >= 100) {
    console.log('vapor')
} else {
    console.log('water')
}