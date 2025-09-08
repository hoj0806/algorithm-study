const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');


// Please Write your code here.

class Info {
    constructor(name, height, weight) {
        this.name = name
        this.height = height
        this.weight = weight
    }
}

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push(new Info(name, height, weight ));
}

console.log("name")
students.slice().sort((a, b) => {
    if(a.name > b.name) return 1
    else if(a.name < b.name) return -1
    else return 0
}).forEach((s) => {
    console.log(s.name, s.height, s.weight)
})
console.log()

console.log("height")
students.slice().sort((a, b) => {
    return b.height - a.height
}).forEach((s) => {
    console.log(s.name, s.height, s.weight)
})