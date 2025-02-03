// Enhanced Object literals

//task1

const person = {
    name : 'Johnny',
    age : '30',
    greet() {
        console.log(`hello ${this.name}, you are ${this.age} years old!`);
        
    }
};

console.log(person);

//task2
const keyName = "key";
let i = 0;
const computedPropertyDemo = {
    [keyName + ++i] : 'AAA',
    [keyName + ++i] : 'BBB',
    [keyName + ++i] : 'CCC'
};

console.log(computedPropertyDemo);
console.log(computedPropertyDemo.key1);
console.log(computedPropertyDemo.key2);
console.log(computedPropertyDemo.key3);
