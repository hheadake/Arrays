//Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.


function reverseElements(n, array) {

    let newArray = [];
    let str = '';

    for (let index = 0; index < n; index++) {
        newArray.push(array[index]);
        
    }
    while(newArray.length > 0) {
        
        str += newArray.pop() + ' '
    }
    
    console.log(str)
    
  

    



} reverseElements (3, [10, 20, 30, 40, 50])