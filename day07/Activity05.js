// Object Iteration

//task 1
const book = {
    title : 'Harry Potter',
    author : 'J.K. Rowling',
    year : '2002',
    getTitleAndAuthorDetails() {
        return (`title : ${this.title} \nauthor : ${this.author}`);
    },

    //task 2
    setBookYear(newyear) {
        this.year = newyear;
        console.log(book.author);
        
        return this;
    }
}


for (const prop in book) {
    console.log(prop, book[prop]);
    
}

//task2 
console.log("----Task 2----");

console.log(Object.keys(book));

console.log(Object.values(book));

