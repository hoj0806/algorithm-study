const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');
// Please Write your code here.

class Product {
    constructor(name = "", code = 0) {
        this.name = name
        this.code = code
    }
}

let p1 = new Product("codetree", 50)

console.log(`product ${p1.code} is ${p1.name}`)

let p2 = new Product(prod2_id, code2)

console.log(`product ${p2.code} is ${p2.name}`)
