const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.


let map = new Map()

for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)
}




let answer = []

map.forEach((value, key) => {
    answer.push([key, value])
})


let sorted = answer.sort((a, b) => {
    let [numberA, countA] = a
    let [numberB, countB] = b
    if (countA !== countB) {
        return countB - countA
    } else {
        return numberB - numberA
    }
})

let result = ''
for(let i = 0; i < k; i++) {
    result += sorted[i][0] + " "
}

console.log(result.trim())