const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let s = f[0]
for (let i = 1; i < f.length; i++) {
    if (s.length === 1) {
        console.log(s)
        return
    }
    let m = Number(f[i])

    if (m >= s.length) {
        s = s.slice(0, s.length - 1)
    } else {
        if (m === 0) {
            s = s.slice(1)
        } else {
            s = s.slice(0, m) + s.slice(m + 1)
            
        }
    }
    console.log(s)
}