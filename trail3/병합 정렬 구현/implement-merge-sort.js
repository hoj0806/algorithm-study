const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

function quick_sort(arr) {
    if (arr.length <= 1) return arr

    let pivot = arr[0]
    let left = []
    let right = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quick_sort(left), pivot, ...quick_sort(right)]
}

let answer = quick_sort(arr)

console.log(answer.join(" "))