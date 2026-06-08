const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');

    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

// Please Write your code here.

class P {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}
let arr = []
for (let i = 0; i < 5; i++) {
    arr.push(new P(codenames[i], scores[i]))
}

let z = arr.sort((a, b) => a.b - b.b)
console.log(z[0].a, z[0].b)