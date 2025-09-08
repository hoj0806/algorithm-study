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

let scores = []

for(let i = 0; i < rawStudentData.length; i++) {
    let [a, b, c, d] = rawStudentData[i].split(" ")
    b = Number(b)
    c = Number(c)
    d = Number(d)
    scores.push(new Student(a, b, c, d))
}


scores.sort((a, b) => {
    if(a.kor === b.kor) {
        if(a.eng === b.eng) {
            return b.math - a.math
        }
        return b.eng - a.eng
    }
    return b.kor - a.kor
})

scores.forEach((s) => {
    console.log(s.name, s.kor, s.eng, s.math)
})