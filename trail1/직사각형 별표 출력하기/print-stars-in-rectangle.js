const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f



for(let i = 1; i <= a; i++) {
    let star = ''
    for(let j = 1; j <= b; j++) {
        star+='* '
    }
    console.log(star.trim())
}