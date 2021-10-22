export function capitalize(string){
    return string[0].toUpperCase() + string.substring(1);
}
export function reverseString(string) {
    var newString = ""
    for(var i = string.length - 1; i >= 0; i--){
        newString += string[i]
    }
    return newString
}
export function analyze(numbers) {
    var min = numbers[0];
    var max = numbers[0];
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] <= min) min = numbers[i]
        if(numbers[i] >= max) max = numbers[i]
        sum += numbers[i]
    }
    var object = {
        average: sum / numbers.length,
        min: min,
        max: max,
        length: numbers.length
    }
    return object
}
export const calculator = {
    add: (a, b) => {return a + b},
    subtract: (a, b) => {return a - b},
    divide: (a, b) => {return a / b},
    multiply: (a, b) => {return a * b}
}
