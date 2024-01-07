function manipulateArray(array) {
let numberArray = array.shift().split(' ').map(Number)

const obj = {
    'Add': addFunction,
    'Remove': removeFunction,
    'Insert': insertFunction,
    'RemoveAt': removeAt,
    
}

for (let index = 0; index < array.length; index++) {
    let [command, firstNum, secondNum] = array[index].split(' ');
    
    if(obj.hasOwnProperty(command)) {
        obj[command](firstNum,secondNum,numberArray);
    }


    
}

console.log(numberArray.join(' '))


function addFunction(firstNum,secondNum, numberArray) {
    numberArray.push(Number(firstNum));
}

function removeFunction(firstNum,secondNum, numberArray) {
    let indexToRemove = numberArray.indexOf(Number(firstNum));
    if (indexToRemove !== -1) {
        numberArray.splice(indexToRemove, 1);
    }
}

function insertFunction(firstNum, secondNum, numberArray) {
    numberArray.splice(Number(secondNum), 0, Number(firstNum));
}

function removeAt(firstNum, secondNum, numberArray) {
    numberArray.splice(Number(firstNum), 1);
}










} manipulateArray(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3'])


//Write a function that manipulates an array of numbers.

//· Add {number}: add a number to the end of the array

//· Remove {number}: remove all occurrences of a particular number from the array

//· RemoveAt {index}: removes number at a given index

//· Insert {number} {index}: inserts a number at a given index

//Note: All the indices will be valid!

//The input comes as an array of strings. The first element will be a string containing the array to manipulate. Every other command you receive will also be a string.

//The output is the manipulated array printed on the console on a single line, separated by space.