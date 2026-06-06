const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()


let n = Number(f)


let even = 1
let odd = n


for (let i = 1; i <= n * 2; i++) {
    let star = ''

    if (i % 2 !== 0) {
        for (let j = 1; j <= odd; j++) {
            star += "* "
        }
        odd--
    } else {
        for (let j = 1; j <= even; j++) {
            star += "* "
        }
        even++
    }
    console.log(star)
}