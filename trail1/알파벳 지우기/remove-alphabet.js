const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let sum = 0


for (let i = 0; i < f.length; i++) {
    let str = f[i]
    let k = ''
    for (let j = 0; j < str.length; j++) {
        if (str[j] >= 0 && str[j] <= 9) {
            k += str[j]
        }
    }
    sum += Number(k)
}

console.log(sum)

