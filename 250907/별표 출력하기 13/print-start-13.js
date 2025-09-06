const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <=n; i++) {
    let firstStar = ''
    let secondStar = ''

    for(let j = n; j >= i; j--) {
        firstStar += "* "
    }

    for(let k = 1; k <= i; k++) {
        secondStar += "* "
    }

    console.log(firstStar)
    console.log(secondStar)
}