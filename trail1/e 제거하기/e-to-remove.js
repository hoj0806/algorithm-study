const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let s = f

for (let i = 0; i < s.length; i++) {
    if (s[i] === "e") {
        s = s.slice(0, i) + s.slice(i + 1)
        break
    }
}

console.log(s)