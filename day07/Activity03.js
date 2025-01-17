// Nested Objects

const library = {
  name: "ABC",
  books: [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      year: "2002",
      getTitleAndAuthorDetails() {
        return `title : ${this.title} \nauthor : ${this.author}`;
      },
    },
    {
      title: "Harry Potter 2",
      author: "J.K. Rowling",
      year: "2003",
      getTitleAndAuthorDetails() {
        return `title : ${this.title} \nauthor : ${this.author}`;
      },
    },
    {
      title: "Harry Potter 3",
      author: "J.K. Rowling",
      year: "2004",
      getTitleAndAuthorDetails() {
        return `title : ${this.title} \nauthor : ${this.author}`;
      },
    },
  ],
};

console.log(library);

//task 2

console.log(library.name);

library.books.map(bookObj => console.log(bookObj.title));

