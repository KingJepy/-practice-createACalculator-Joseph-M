/*
Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:
    ● Absolute Value Calculation: Given any number, return its absolute
    value.
    ● Power Calculation: Calculate and return the value of a base raised to
    a specific power.
    ● Square Root Finder: Calculate the square root of a number.
    ● Maximum and Minimum Finder: From a given set of numbers,
    determine the largest and smallest values.
    ● Random Number Generator: Generate a random integer within a
    specified range.
    ● Custom Rounding: Round a number to a specified number of decimal
    places.
Step-by-Step Tasks:
1. Write a function for each operation listed above using the Math
module.

2. Test each function with sample inputs to ensure it works as intended.

3. Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.

4. Test the calculator by performing the following:
    ● Find the absolute value of -45.67.
    ● Raise 5 to the power of 3.
    ● Calculate the square root of 144.
    ● Determine the largest and smallest values from [3, 78, -12,
    0.5, 27].
    ● Generate a random number between 1 and 50.
    ● Round 23.67891 to 2 decimal places.
*/
//use the math function to return the absolute value of our argument
function absValue(num1){
    return Math.abs(num1)
};
console.log(absValue(-45.67));
//use math function pow to return the num1 raised to the power
function raisedPow(num1, power){
    return Math.pow(num1, power);
};
console.log(raisedPow(5, 3));

function squareRoot(num1){
    return Math.sqrt(num1);
};
console.log(squareRoot(144));
// found that ... unpacks an array on the interweb
function maxMin(...numList){
    return `Max number is ${Math.max(...numList)}, Min number is ${Math.min(...numList)}.`;
};
let numArr = [3, 78, -12, 0.5, 27]
console.log(maxMin(...numArr));

function randomNum(num1){
    return Math.random() * 50;
};
console.log(randomNum(50));

function roundNum(num1) {
    return Math.round(num1 *100)/100;
};
console.log(roundNum(23.67891));