const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = input.map(Number)

for(let i = 0; i < a; i++) {
    let star = ''
    for(let j = 0; j < b; j++) {
        star += "* "
    }
    console.log(star)
}