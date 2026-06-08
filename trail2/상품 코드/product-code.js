const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');
// Please Write your code here.


class P {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}

class Q {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}

let p = new P("codetree", 50)
let q = new Q(prod2_id, code2)

console.log(`product ${p.b} is ${p.a}`)
console.log(`product ${q.b} is ${q.a}`)

