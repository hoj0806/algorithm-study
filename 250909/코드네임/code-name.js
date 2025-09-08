const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');
    
    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

// Please Write your code here.
class Score {
    constructor(code = "", score = 0) {
        this.code = code
        this.score = score
    }
}
let arr = Array(input.length).fill(new Score())

for(let i = 0; i < arr.length; i++) {
    arr[i] = new Score(codenames[i], scores[i])
}

arr.sort((a, b) => {
    a.score - b.score
})

console.log(arr[0].code, arr[0].score)