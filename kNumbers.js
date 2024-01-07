function solve (array) {
    let count = array.shift()
    let firstElement = array.slice (0, count)
    let secElement = array.slice (array.length - count)
    console.log (firstElement.join(' '))
    console.log (secElement.join (' '))
} solve ([2,

    7, 8, 9])