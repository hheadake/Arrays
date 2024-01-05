//Write a function that receives an array and the number of rotations you have to perform.

//Note: Depending on the number of rotations, the first element goes to the end.


function rotate (arrToRotate, rotations) {
    let newArray = []
    for (let i = 0; i < rotations; i++) {
        let numberToMove = arrToRotate.shift()
        arrToRotate.push(numberToMove)
    }
    console.log (arrToRotate.join(' '))
} rotate ([51, 47, 32, 61, 21], 2)
