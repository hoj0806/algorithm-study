const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];

class Person {
    constructor(name, height, weight) {
        this.name = name
        this.height = height
        this.weight = weight
    }
}
for (let i = 0; i < 5; i++) {
    const [name, heightStr, weightStr] = input[i].split(' ');
    const height = Number(heightStr);
    const weight = Number(weightStr);
    students.push(new Person(name, height, weight));
}


let result1 = [...students].sort((a, b) => {
    return a.name.localeCompare(b.name) - b.name.localeCompare(a.name)
})

let result2 = [...students].sort((a, b) => {
    return b.height - a.height
})

console.log("name")
result1.forEach((i) => {
    console.log(i.name, i.height, (i.weight).toFixed(1))
})
console.log()
console.log("height")
result2.forEach((i) => {
    console.log(i.name, i.height, (i.weight).toFixed(1))
})