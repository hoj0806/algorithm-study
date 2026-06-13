const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.

let max = 0

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            let [ax, ay] = points[i]
            let [bx, by] = points[j]
            let [cx, cy] = points[k]

            if (
                ((ax === bx) && (cy === ay || cy === by)) ||
                ((ax === cx) && (by === cy || by === ay)) ||
                ((bx === cx) && (ay === by || ay === cy))

            ) {
                max = Math.max(max,
                    (Math.abs(
                        ((ax * by) + (bx * cy) + (cx * ay)) - ((bx * ay) + (cx * by) + (ax * cy))

                    ))
                )
            }


        }
    }
}

console.log(max)