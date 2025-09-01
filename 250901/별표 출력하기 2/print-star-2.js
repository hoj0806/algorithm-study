const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = n; i > 0; i--) {
    let star = ''
    for(let j = 0; j < i; j++) {
        star+= "* "
    }

    console.log(star)
}