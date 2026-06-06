const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let [a, b] = f

while (true) {
    let find = false

    for (let i = 0; i < a.length - b.length + 1; i++) {
        let s = a.slice(i, b.length + i)
        if (s === b) {
            a = a.slice(0, i) + a.slice(i + b.length)
            find = true
            break
        }
    }
    if (find === false) {
        console.log(a)
        return
    }
}