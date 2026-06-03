const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let result = ''
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 ||
        String(i).indexOf("3") !== -1 ||
        String(i).indexOf("6") !== -1 || 
        String(i).indexOf("9") !== -1
    ) {
        result += 0 + " "
    } else {
        result += i + " "
    }
}

console.log(result)