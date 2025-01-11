// Function Parameters

//Task1
function getProduct(a, b=3) {
    return a*b;
}

console.log(getProduct(2,5));
console.log(getProduct(5));

//Task2
function greet(pName, pAge) {
    console.log(`Hello ${pName}. ${pAge}`);
    
}

greet("Dhoni", "43");