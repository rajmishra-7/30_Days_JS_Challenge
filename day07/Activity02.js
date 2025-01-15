// Object methods

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
        return this;
    }
}

console.log(book.getTitleAndAuthorDetails());

//task 2

console.log(book.setBookYear('2025'));