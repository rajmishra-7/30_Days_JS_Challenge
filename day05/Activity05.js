// Higher order functions

//task 1
function highOrderFunctionDemo(n, func) {
    for (let index = 0; index < n; index++) {
        func(index);
        
    }
}

function func(i){
    console.log("Hello! ",i);
    
}

highOrderFunctionDemo(5, func);

//task 2

function hof2(func1, func2, value) {
    return func2(func1(value));
}

func1 = (value) => {
    return ++value;
}

func2 = (value) => {
    return value**2;
}

console.log(hof2(func1,func2,4));
