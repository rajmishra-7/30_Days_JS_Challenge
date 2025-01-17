// Object methods

//task 1
const book = {
    title : 'Harry Potter',
    author : 'J.K. Rowling',
    year : '2002',
    getTitleAndAuthorDetails() {
        return (`title : ${book.title} \nauthor : ${book.author}`);
    },

    //task 2
    setBookYear(newyear) {
        book.year = newyear;
        return book;
    }
}

console.log(book.getTitleAndAuthorDetails());

//task 2

console.log(book.setBookYear('2025'));