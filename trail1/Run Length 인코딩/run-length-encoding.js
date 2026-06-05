const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let s = f


let cnt = 1

let result = s[0]

for (let i = 1; i < s.length; i++) {
    let last = result[result.length - 1]
    if (last === s[i]) {
        cnt++
    } else {
        result += cnt
        result += s[i]
        cnt = 1
    }
}

result += cnt

console.log(result.length)
console.log(result)