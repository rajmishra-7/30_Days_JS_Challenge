// Higher order functions

function highOrderFunctionDemo(n, func) {
    for (let index = 0; index < n; index++) {
        func(index);
        
    }
}

function func(i){
    console.log("Hello! ",i);
    
}

highOrderFunctionDemo(5, func);