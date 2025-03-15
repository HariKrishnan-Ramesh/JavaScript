// const numbers = [1,2,3,4,5,]
// // const square = []
// function getSquares(){
//     numbers.map((values)=>{
//         const square = values*values
//         console.log(square)

import { useCallback } from "react"

//     })
// }

// getSquares()


function odd(numbers) {

    const oddNumber = numbers.filter((values) => {
        if (values % 2 !== 0) {
            Callback(oddNumber)
        }
        else {
            Callback("Not odd", null)
        }
    })
}

const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
const value = odd(numbers)
console.log(value)

