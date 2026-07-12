const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = []
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    arr.push([a, 1, i])
    arr.push([b, -1, i])

}

let set = new Set()
let sArr = arr.sort((a, b) => a[0] - b[0])
let ans = 0

for (let i = 0; i < sArr.length; i++) {
    let [_, y, index] = sArr[i]

    if (y === 1) {
        if (set.size === 0) {
            ans++
        }
        set.add(index)
    } else if (y === -1) {
        set.delete(index)
    }
}

console.log(ans)