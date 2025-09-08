const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

class Info {
    constructor(name, height, weight) {
        this.name = name
        this.height = height
        this.weight = weight
    }
}

const studentsInput = [];
for (let i = 1; i <= n; i++) {
    let [a, b, c] = input[i].split(' ')
    studentsInput.push(new Info(a, Number(b), Number(c)));
}

studentsInput.sort((a, b) => a.height - b.height)

for(let i = 0; i < studentsInput.length; i++) {
    let s = studentsInput[i]
    console.log(s.name, s.height, s.weight)
}
