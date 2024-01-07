
//Write a function that finds the longest sequence of equal elements in an array of numbers.

//If several longest sequences exist, print the leftmost one

function findNumbers (array) {
    let numbers = 0
    let counter = 0
    let result = []
    for (let i = 0; i < array.length; i++) {
            numbers = array [i]
            let newArray = []
    
           for (let j = i  ; j < array.length; j++) {
            let secondNumber = array [j]
                if (numbers != secondNumber) {
                    
                   break;
                } 
                newArray.push(numbers)
                
           }
           if (result.length < newArray.length) {
            result = newArray
           }
           
    }
     return result.join(' ')
    
    
    
    }