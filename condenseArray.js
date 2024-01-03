//Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements until a single number is obtained.
function solve(arr) {
    let result = [];
  
    for (let el of arr) {
      result.push(el);
    }
  
    while (result.length > 1) {
      let temp = [];
  
      for (let i = 0; i < result.length - 1; i++) {
        temp[i] = result[i] + result[i + 1];
      }
  
      result = temp;
    }
  
    console.log(result.join(' '));
  } solve ([5,0,4,1,2])