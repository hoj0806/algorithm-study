const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

function bubble_sort(arr) {
    let l = arr.length
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            }
    
        }
    }
    return arr
}

let answer = bubble_sort(arr)

console.log(answer.join(" "))