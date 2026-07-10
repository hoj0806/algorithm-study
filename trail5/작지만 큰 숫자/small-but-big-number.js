const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const SortedSet = require("collections/sorted-set");


const [N, M] = input[0].trim().split(" ").map(Number);
const sequence = input[1].trim().split(" ").map(Number);
const queries = input[2].trim().split(" ").map(Number);

// Please Write your code here.


const s = new SortedSet();

for (let i = 0; i < N; i++) {
    s.push(sequence[i])
}

for(let i = 0; i < M; i++) {
    let q = queries[i]
    let idx = s.findGreatestLessThanOrEqual(q)
    if(idx) {
        console.log(idx.value)
        s.delete(idx.value)
    } else {
        console.log(-1)
    }
}