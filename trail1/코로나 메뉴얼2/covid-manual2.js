const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let arr = [0, 0, 0, 0]
for (let i = 0; i < f.length; i++) {
    let [z, t] = f[i].split(" ")
    t = Number(t)
    if (z === 'Y') {
        if (t >= 37) arr[0] += 1
        else arr[2] += 1
    } else {
        if (t >= 37) arr[1] += 1
        else arr[3] += 1
    }
}

if (arr[0] >= 2) {
    arr.push("E")
}

console.log(arr.join(" "))