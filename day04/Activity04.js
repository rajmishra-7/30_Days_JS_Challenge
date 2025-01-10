// Nested Loops
let pattern = "";
for (let row = 0; row < 5; row++) {
    for (let column = 0; column <= row; column ++) {
        pattern += "*";
        
    }
    pattern += '\n';
    
}

console.log(pattern);
