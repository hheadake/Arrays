//Write a function, which changes the value of odd and even numbers in an array of numbers.

//· If the number is even - add to its value its index position

//· If the number is odd - subtract to its value its index position



function addOrSubstract(input) {
    
        let odd = 0
        let even = 0
        let newArray = []
        let inputSum = 0
        let finalSum = 0
        
    
         for (let i = 0; i < input.length; i++) {
            let currentNum = input [i]
            even = currentNum + i
            odd = currentNum - i
            if (currentNum % 2 === 0) {
                newArray.push(even)
            } else { newArray.push(odd)}
            inputSum += currentNum
            finalSum += newArray [i]
         }

        console.log(newArray)
        console.log(inputSum)
        console.log(finalSum)
    


} addOrSubstract ([5, 15, 23, 56, 35])