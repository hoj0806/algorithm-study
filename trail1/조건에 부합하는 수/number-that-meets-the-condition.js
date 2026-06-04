const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let result = ''


for (let i = 1; i <= n; i++) {
    if (
        (i % 2 === 0 && i % 4 !== 0) ||
        (Math.floor(i / 8) % 2 === 0) ||
        ((i % 7) < 4)
    ) {
        continue
    }

    result += i + " "
}

console.log(result.trim())