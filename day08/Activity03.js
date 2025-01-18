// Spread and Rest Operators-

//task 1
let arr1 = [30, 40, 50];

let arr2 = new Array(10,20, ...arr1);
let arr3 = [10,20, ...arr1];
console.log(arr1, typeof arr1);
console.log(arr2, typeof arr2);
console.log(arr3, typeof arr3);

//task 2

function sum(...nums) {
    let sum = 0;
    nums.map(num => sum += num);
    console.log(sum);
    
}

sum(12,14,16);
sum(10,20,30,40,50);