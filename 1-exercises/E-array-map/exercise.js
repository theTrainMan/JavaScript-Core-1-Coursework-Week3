// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiple1(number1) {
    return number1 * 100;
}

let multiplied1 = numbers.map(multiple1);
console.log("Case 1: " + multiplied1);

//2
let multiplied2 = numbers.map(function multiple2(number2) {
    return number2 * 100;
});

console.log("Case 2: " + multiplied2);

//3
let multiplied3 = numbers.map(function(number3) {
    return number3 * 100;
});

console.log("Case 3: " + multiplied3);

//4
let multiplied4 = numbers.map((number4) => {
    return number4 * 100;
});