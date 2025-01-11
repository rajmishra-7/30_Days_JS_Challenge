// Function Expression

//task 1
function findMax(a,b) {
    console.log(a>b?a:b);
}

findMax(5,2);
findMax(3,9);

//task 2
function concatStrings(s1,s2) {
    let result = s1.concat(s2);
    return result;
}

let str1 = "hello";
let str2 = "finishers";

console.log(concatStrings(str1,str2));