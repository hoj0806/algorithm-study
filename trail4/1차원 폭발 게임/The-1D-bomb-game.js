const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let numbers = input.slice(1, Number(n) + 1).map(Number);

// Please Write your code here.




while (true) {
    if (numbers.length === 0) break

    let index = []
    let temp = [[0, numbers[0]]]

    for (let i = 1; i < numbers.length; i++) {
        let lastBomb = temp[temp.length - 1][1]
        let currentBomb = numbers[i]

        if (lastBomb === currentBomb) {
            temp.push([i, currentBomb])
        } else {
            if (temp.length >= m) {
                for (let i = 0; i < temp.length; i++) {
                    index.push(temp[i])
                }
            }
            temp = [[i, currentBomb]]
        }
    }

    if (temp.length >= m) {
        index = [...index, ...temp]
    }

    if (index.length > 0) {
        for (let i = 0; i < index.length; i++) {
            let [idx, _] = index[i]
            numbers[idx] = 0
        }

        let temp2 = []

        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] !== 0) temp2.push(numbers[j])
        }

        numbers = [...temp2]
    } else {
        break
    }
}

console.log(numbers.length)
console.log(numbers.join('\n'))


