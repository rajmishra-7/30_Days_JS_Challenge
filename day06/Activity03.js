// Array methods (intermediate)

//map - double the elements

let arr = [1,2,3,4,5,6];

// let result = arr.map(function (element) {
//     return element * 2;
// })

let result = arr.map(element => element*2)
console.log(result);


//filter - only even numbers

result = arr.filter(element => element % 2 == 0) //returns element if the right side condition is fulfilled.
console.log(result);

//reduce - sum of all elements

let sum = 0;

result = arr.reduce((sum,element)=> sum + element);

console.log(result);
