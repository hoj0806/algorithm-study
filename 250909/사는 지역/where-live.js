const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

// Please Write your code here.

class Person {
    constructor(name, number, locate) {
        this.name = name
        this.number = number
        this.locate = locate
    }
}

let arr = Array(personLines.length).fill(new Person)

for(let i = 0; i < arr.length; i++) {
    let [a, b, c] = personLines[i].split(" ")
    arr[i] = new Person(a, b, c)
}

arr.sort((a, b) => {
    if(a.name > b.name) return -1
    else if(a.name < b.name) return 1
    else return 0
})

console.log(`name ${arr[0].name}`)
console.log(`addr ${arr[0].number}`)
console.log(`city ${arr[0].locate}`)
