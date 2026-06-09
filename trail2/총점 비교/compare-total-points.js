const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

// Please write your code here.

class Student {
    constructor(name, kor, eng, math) {
        this.name = name
        this.kor = kor
        this.eng = eng
        this.math = math
    }
}
let arr = []
for (let i = 0; i < studentData.length; i++) {
    let [name, a, b, c] = studentData[i]
    a = Number(a)
    b = Number(b)
    c = Number(c)
    arr.push(new Student(name, a, b, c))
}


let result = arr.sort((a, b) => {
    return (a.kor + a.eng + a.math) - (b.kor + b.eng + b.math)
})

for (let i = 0; i < result.length; i++) {
    let student = result[i]
    console.log(student.name, student.kor, student.eng, student.math)
}