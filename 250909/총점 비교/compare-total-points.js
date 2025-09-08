const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

// Please write your code here.

class Student {
    constructor(a, b, c, d) {
        this.a = a
        this.b = Number(b)
        this.c = Number(c)
        this.d = Number(d)
    }
}

const scores = []


for(let i = 0; i < input.length; i++) {
    let [a, b, c, d] = input[i].split(" ")
    scores.push(new Student(a, b, c, d))
}

scores.sort((x, y) => {
    return (x.b + x.c + x.d) - (y.b + y.c + y.d)
})

scores.forEach((s) => {
    console.log(s.a, s.b, s.c, s.d)
})