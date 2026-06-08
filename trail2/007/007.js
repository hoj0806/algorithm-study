const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');


class A {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }
}

let k = new A(s_code, m_point, time)

console.log(`secret code : ${k.a}`)
console.log(`meeting point : ${k.b}`)
console.log(`time : ${k.c}`)
