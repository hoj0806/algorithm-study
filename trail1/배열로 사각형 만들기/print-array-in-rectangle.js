let matrix = Array(5).fill(0).map(() => Array(5).fill(0))



for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 0 || j === 0) {
            matrix[i][j] = 1
        } else {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
        }
    }
    console.log(matrix[i].join(" "))
}
