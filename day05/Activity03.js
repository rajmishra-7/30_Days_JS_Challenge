// Arrow Functions

let calculateSum = (a, b) => {
    return a+b;
}

let sum = calculateSum(112,341);
console.log(sum);

//task 2

const checkStrings = (element, str) => {
    return str.includes(element);
}

console.log(checkStrings("w", "hello"));
