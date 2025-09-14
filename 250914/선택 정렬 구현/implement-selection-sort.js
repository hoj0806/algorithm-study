const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.


function selection_sort(arr) {
    let len = arr.length
    for(let i = 0; i < arr.length -1; i++) {
        let minimum = arr[i]

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < minimum) {
                minimum = arr[j]
            }
            let tmp = arr[i]
            arr[i] = minimum
            minimum = tmp
        }
    }

    console.log(arr)    
}

selection_sort(arr)
