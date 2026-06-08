const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.


class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight
    }
}

let result = studentsInput.map(([name, height, weight]) =>
    new Person(name, height, weight)).sort((a, b) => a.height - b.height)

for (let i = 0; i < result.length; i++) {
    console.log(result[i].name, result[i].height, result[i].weight)
}