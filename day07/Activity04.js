// this keyword

const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: "2002",
  getTitleAndAuthorDetails() {
    return `title : ${this.title} \nauthor : ${this.author}`;
  },
};

console.log(book.getTitleAndAuthorDetails());