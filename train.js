function train (array) {
let wagonArray = array.shift().split(' ').map(Number);
let maxCapacity = array.shift();


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let command = element.split(' ')
    let passengers = Number(command[1])
  
    if (command[0] == 'Add') {
        wagonArray.push(Number(passengers))
    } else {
        for (let index = 0; index < wagonArray.length; index++) {
            let element = wagonArray[index];
            element += Number(command)
            if (element > Number(maxCapacity)) {
                break;
            } else {
                wagonArray.push(Number(command))
            }

            
        }
    }
    
}

console.log(wagonArray.join(' '))

} train (['32 54 21 12 4 0 23',

'75',
'30',

'10',

'75'])