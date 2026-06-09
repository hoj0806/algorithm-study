const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// Please Write your code here.

class Student {
    constructor(name, kor, eng, math) {
        this.name = name
        this.kor = kor
        this.eng = eng
        this.math = math
    }
}
let arr = []
for (let i = 0; i < rawStudentData.length; i++) {
    let [name, a, b, c] = rawStudentData[i].split(" ")
    a = Number(a)
    b = Number(b)
    c = Number(c)
    arr.push(new Student(name, a, b, c))
}


let result = arr.sort((a, b) => {
    if (a.kor !== b.kor) {
        return b.kor - a.kor
    } else if (a.eng !== b.eng) {
        return b.eng - a.eng
    } else {
        return b.math - a.math
    }
})

for (let i = 0; i < result.length; i++) {
    let student = result[i]
    console.log(student.name, student.kor, student.eng, student.math)
}