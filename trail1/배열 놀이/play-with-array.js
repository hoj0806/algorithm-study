const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let [b, a] = f[0].split(" ")
let arr = f[1].split(" ").map(Number)

for (let i = 2; i < Number(a) + 2; i++) {
    let [x, y, z] = f[i].split(" ").map(Number)
    if (x === 1) {
        console.log(arr[y - 1])
    } else if (x === 2) {
        let find = false
        for (let q = 0; q < arr.length; q++) {
            if (arr[q] === y) {
                console.log(q + 1)
                find = true
                break
            }
        }
        if (find === false) console.log(0)
    } else if (x === 3) {
        let result = ''
        for (let p = y - 1; p <= z - 1; p++) {
            result += arr[p] + " "
        }
        console.log(result)
    }
}

