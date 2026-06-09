const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const records = [];

class Person {
    constructor(name, height, weight) {
        this.name = name
        this.height = height
        this.weight = weight
    }
}

for (let i = 1; i <= n; i++) {
    const [name, height, weight] = input[i].split(" ");
    records.push(new Person(name, Number(height), Number(weight)));
}

records.sort((a, b) => {
    if (a.height !== b.height) {
        return a.height - b.height
    } else {
        return b.weight - a.weight
    }
}).forEach((i) => {
    console.log(i.name, i.height, i.weight)
})
