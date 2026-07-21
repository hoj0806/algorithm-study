const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let [n, m] = input.split(" ").map(Number)

const matrix = Array(n).fill(0).map(() => Array(m).fill(0))
let cnt = 1

let z = 1

for (let i = 1; i <= n + m - 1; i++) {
    if (i <= m) {
        let row = 0
        let col = i - 1
        let num = Math.min(col + 1, n)
        for (let j = 1; j <= num; j++) {
            matrix[row][col] = cnt
            row++
            col--
            cnt++
        }
    } else {
        let row = z
        let col = m - 1
        while (row <= n - 1 && col >= 0) {
            matrix[row][col] = cnt
            row++
            col--
            cnt++
        }
        z++

    }
}

matrix.forEach(row => console.log(row.join(" ")))





