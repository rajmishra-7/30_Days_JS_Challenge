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