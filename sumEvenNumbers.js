//Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.


function sumEvenNumbers (array) {
    let newArray = []
    
    for (let index = 0; index < array.length; index++) {
        const element = Number(array[index]);
        if (element % 2 == 0) {
            newArray.push(element)
        }
        
        
    }
    
    sumNumbers(newArray)


} sumEvenNumbers(['3','5','7','9'])

function sumNumbers (array) {
    let totalSum = 0;
    array.forEach(element => {
        totalSum += element
    });
    console.log(totalSum)
    
}