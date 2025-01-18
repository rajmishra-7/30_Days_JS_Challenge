// Destructuring

//task 1

const arr = [10, 20, 30, 40, 50];

let [first, second] = arr;

console.log(first, second);

[first, second] = [5, 4, 3, 2, 1];

console.log(first, second);

//task 2

const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: "2002",
  getTitleAndAuthorDetails() {
    return `title : ${this.title} \nauthor : ${this.author}`;
  },

  setBookYear(newyear) {
    this.year = newyear;
    console.log(book.author);

    return this;
  },
};

const { title, author } = book;

console.log(title);
