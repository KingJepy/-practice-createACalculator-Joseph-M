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
