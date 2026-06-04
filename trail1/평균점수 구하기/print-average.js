const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


console.log((f.reduce((a, c) => a + c, 0)
    / f.length).toFixed(1)
)