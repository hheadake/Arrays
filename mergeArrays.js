//Write a function, which receives two string arrays and merges them into a third array.
//If the index of the element is even, add into the third array the sum of both elements at that index
//If the index of the element is odd, add the concatenation of both elements at that index

function mergeArrays(firstArr, secondArr) {
    let mergedArray = [];

for (let index = 0; index < firstArr.length; index++) {

    if (index % 2 == 0) {
        let secondElement = Number(secondArr[index]);
        let element = Number(firstArr[index]);

        mergedArray.push(element + secondElement)

    } else {
        let secondElement = secondArr[index];
        let element = firstArr[index];

        mergedArray.push(element + secondElement)
    }
   
}

console.log(mergedArray.join(' - '))



} mergeArrays (['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])

