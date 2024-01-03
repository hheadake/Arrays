//Write a program, which receives a number and prints the corresponding name of the day of the week


function printDay(num) {

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if (num >= 1 && num <= 7) {
    return days[num-1]
} else {
    return 'Invalid day!'
}


} printDay(7)