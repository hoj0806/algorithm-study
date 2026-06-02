const fs = require('fs')
let f = Number(fs.readFileSync(0).toString().trim())


let matrix = Array(f).fill(0).map(() => Array(f).fill(0))


for(let i = 1; i <= f; i++) {
    for(let j = 1; j <=f ;j++) {
        if(i % 2 !== 0) {
            matrix[j-1][i-1] = j
        } else {
            matrix[j-1][i-1] = f - j + 1
        }
    }
}

for(let i = 0; i < f; i++) {
    console.log(matrix[i].join(""))
}