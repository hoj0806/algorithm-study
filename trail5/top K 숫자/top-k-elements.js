const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const SortedSet = require("collections/sorted-set");


// Please Write your code here.


const s = new SortedSet();


for (let i = 0; i < n; i++) {
    s.push(arr[i])
}

let answer = ''
for (let i = 1; i <= k; i++) {
    let idx = s.findGreatest()
    answer += idx.value + " "
    s.delete(idx.value)
}

console.log(answer.trim())