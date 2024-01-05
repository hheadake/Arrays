//Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right.

function findTopInt(array) {
    let newArray = []
    let currentNum = 0
    let secNum = 0 
    for (let i = 0; i <= array.length; i++) {
       currentNum = array [i]
       let isBigger = true
        for (let j = i + 1; j <= array.length;j ++) {
             secNum = array [j]
             if (currentNum <= secNum) {
               isBigger = false
            }
            if (isBigger) {
                newArray.push(currentNum)
                break;
            }
            
        
        
        }
        
    }
    
    console.log (newArray.join(' '))
    




} findTopInt ([1, 4, 3, 2])