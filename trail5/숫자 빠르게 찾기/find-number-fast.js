const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const queries = input.slice(2, 2 + m).map(Number);

// Please Write your code here.


function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = parseInt((left + right) / 2)
        if (arr[mid] === target) {
            // n번째를 찾아야하기 때문에 인덱스에 + 1
            return mid +1
        } else {
            if (arr[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1
}

for (let i = 0; i < m; i++) {
    let q = queries[i]
    console.log(binarySearch(numbers, q))
} 