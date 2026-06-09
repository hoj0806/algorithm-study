const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];

class Student {
    constructor(height, weight, index) {
        this.height = height
        this.weight = weight
        this.index = index
    }
}

for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push(new Student(height, weight, i));
}

studentInputs.sort((a, b) => {
    if (a.height !== b.height) {
        return a.height - b.height
    } else {
        return b.weight - a.weight
    }
}).forEach((i) => {
    console.log(i.height, i.weight, i.index)
})

// Please Write your code here.