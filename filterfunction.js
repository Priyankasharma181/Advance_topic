var number = [2, 5, 3, 6, 8, 90]
const even = (num) => {
    if (num % 2 == 0) {
        return true
    } return false
}
// console.log(odd(number))
const arr = number.filter(even)
console.log(arr);


var numbers = [2, 5, 3, 6, 8, 90]
const odd = (number) => {
    if (number % 2 != 0) {
        return true
    }return false
}
let newArr = numbers.filter(odd)
console.log(newArr);
