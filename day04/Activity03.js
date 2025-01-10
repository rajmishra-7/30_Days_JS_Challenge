// Do...while loop

//Task1
let i = 1;

do {
    console.log(i++);
    
} while (i <= 5);

//Task2

let num = 5;
let f = 1;
let factorial = 1;

do {
    factorial = f * factorial;
    f++;
} while (f <= num);

console.log(factorial);
