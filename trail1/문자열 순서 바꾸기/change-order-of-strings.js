const fs = require('fs')
let s = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = s;

[a, b] = [b, a];

console.log(a);
console.log(b);
