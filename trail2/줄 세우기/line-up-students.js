const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];

class Student {
    constructor(height, weight, index) {
        this.height = height
        this.weight = weight
        this.index = index
    }
}
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push(new Student(height, weight, i));
}

let result = students.sort((a, b) => {
    if (a.height !== b.height) {
        return b.height - a.height
    } else if (a.weight !== b.weight) {
        return b.weight - a.weight
    } else {
        return a.index - b.index
    }
})

result.forEach((s) => {
    console.log(s.height, s.weight,s.index)
})