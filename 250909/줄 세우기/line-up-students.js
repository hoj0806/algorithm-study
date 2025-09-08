const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// Please Write your code here.

class Info {
    constructor(height, weight, number) {
        this.height = height
        this.weight = weight
        this.number = number
    }
}


let students = [];

for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push(new Info(height, weight, i));
}

students.sort((a, b) => {
    if(a.height === b.height) {
        if(a.weight === b.weight) {
            return a.number - b.number
        }
        return b.weight - a.weight
    }
    return b.height - a.height
})

students.forEach((s) => {
    console.log(s.height, s.weight, s.number)
})