const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

// Please Write your code here.

function lower_bound(arr, target) {
    let left = 0
    let right = arr.length

    while(left < right) {
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] >= target) {
            right = mid
        } else if(arr[mid] < target) {
            left = mid + 1
        }
    }

    return left
}

for(let i = 0; i < queries.length; i++) {
    let idx = lower_bound(arr, queries[i])
    if(queries[i] === arr[idx]) console.log(idx + 1)
    else console.log(-1)
}