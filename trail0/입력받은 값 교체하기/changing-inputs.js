const fs = require('fs')
const p = fs.readFileSync(0).toString().trim().split(' ').map(Number)



let [a, b] = p;

[a, b] = [b, a];

console.log(a, b)